console.log("script loading complete");

const fetchingURL = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/ai/tools`
  );
  const data = await response.json();
  let singlePhone = data.data.tools;
  console.log(singlePhone);
  displayingSection(singlePhone);
};

const displayingSection = (sec) => {
  console.log(sec.name);
  const cardContainer = document.getElementById("card__container");
  sec.splice(5, 1);
  sec.splice(9, 1);
  console.log(sec);
  sec.forEach((tool) => {
    const cardSection = document.createElement("div");
    cardSection.innerHTML = `
        <div
        onclick="section_details.showModal(), sectionDetails('${tool.id}')"
        class="card  bg-base-100 shadow-xl border-[1px] border-[rgba(255, 255, 255, .2)] p-6 rounded-xl"
      >
        <figure>
          <img
            class="rounded-xl mb-3 h-[300px]"
            src="${tool.image}"
            alt="Shoes"
          />
        </figure>
        <div class="card-body p-0">
          <h2 class="card-title">Features</h2>
          <ul type="1" class="pl-2 pb-3">
                  <li class="text-sm text-gray-500">1. Natural language processing</li>
                  <li class="text-sm text-gray-500">2. Contextual understanding</li>
                  <li class="text-sm text-gray-500">3. Text generation</li>
                </ul>
          <hr />
          <h3 class="card-title pt-3">${tool.name}</h3>
          <p>
            <i class="fa-regular fa-calendar-days" style="color: #9b9da1"></i>
            <span class="text-gray-500"> 11/01/2024 </span>
          </p>
        </div>
      </div>
        `;
    cardContainer.appendChild(cardSection);
  });
};

const sectionDetails = async (id) => {
  console.log(id);
  const response = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${id}`
  );
  const data = await response.json();
  let details = data.data;
  //   console.log(data.data);
  const detailssContainer = document.getElementById("detailsSection");
  console.log(detailssContainer);

  detailssContainer.innerHTML = `
    <div class="flex lg:flex-row flex-col-reverse justify-around bg-white text-black">
      <div class="bg-color lg:w-[50%] p-10">
        <h3 class="text-[23px] font-bold"> ${details?.description} </h3>
        <div class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 justify-between py-4 ">
          <div class="py-3 px-5 rounded-xl bg-white font-semibold text-green-500 ">${details?.pricing[0].price}<br />month<br />${details?.pricing[0].plan}</div>
          <div class="py-3 px-5 rounded-xl bg-white font-semibold text-orange-500">${details?.pricing[1].price}<br />month<br />${details?.pricing[1].plan}</div>
          <div class="py-3 px-5 rounded-xl bg-white font-semibold text-red-600">${details?.pricing[2].price}<br/> ${details?.pricing[2].plan}</div>
        </div>
        <div class="flex justify-between pt-2">
          <div>
            <h4 class="font-bold text-[19px]">Features</h4>
            <ul class=" text-sm pt-2 text-gray-600">
              <li>- ${details.features["1"].feature_name}</li>
              <li>- ${details.features["2"].feature_name}</li>
              <li>- ${details.features["3"].feature_name}</li>
            </ul>
          </div>
          <div >
            <h4 class="font-bold text-[19px]">Ingredients</h4>
            <ul class=" text-sm pt-2 text-gray-600">
              <li>- ${details.integrations[0]}</li>
              <li>- ${details.integrations[1]}</li>
              <li>- ${details.integrations[2]}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col ml-3  p-6 border-gray lg:w-[50%] space-y-4">
        <img
          class="w-[500px] rounded-xl"
          src="${details.image_link[0]}"
          alt=""
        />
        <h4 class="font-bold text-[22px] text-center">${details.input_output_examples[0].input}</h4>
        <p class="pb-7 text-gray-500 text-center">${details.input_output_examples[0].output}</p>
      </div>
    </div>
    
    
    `;
};

function getTheValue(item) {
  pricing.forEach((item) => {
    console.log(item.plan);
  });
}

fetchingURL();
