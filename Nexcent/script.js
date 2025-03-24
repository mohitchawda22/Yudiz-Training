// hero card data 

const cardData = [
  { title: "Lessons and insights ", spantitle: "from 8 years", description: "Where to grow your business as a photographer: site or social media?", imageUrl: "public/Illustration.svg" },
  { title: "Lessons and insights ", spantitle: "from 8 years", description: "Where to grow your business as a photographer: site or social media?", imageUrl: "public/Illustration.svg" },
  { title: "Lessons and insights ", spantitle: "from 8 years", description: "Where to grow your business as a photographer: site or social media?", imageUrl: "public/Illustration.svg" },
];

// hero card create
const heroContainer = document.querySelector(".hero-container");

cardData.map(card => {
  const cardElement = document.createElement("div");
  const cardContent = `
      <div class="row d-flex align-content-center justify-content-between ps ">
                <div class=" col-md-12 col-lg-7 fs">
                    <h1 class="fw-bold w-100 fw-semibold">${card.title}<span class="">${card.spantitle}</span></h1>
                    <p class="pb-2 pt-2 fw-normal">${card.description}</p>
                    <a href="" class="fw-bold button">Register</a>
                </div>
                <div class=" col-md-12 col-lg-5 pt-xs-0 ill-img placeholder-glow">
                    <img src="${card.imageUrl}" alt="" class="ill-img " id="my-Image">
                </div>
            </div>
    `;
  cardElement.innerHTML = cardContent;
  heroContainer.appendChild(cardElement);
});


// const communityCard = [
//   { imageUrl: "public/Icon1.svg", title: "Membership Organisations", description: "Our membership management software provides full automation of membership renewals and payments" },
//   {
//     imageUrl: "public/Icon2.svg", title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments"
//   },
//   {
//     imageUrl: "public/Icon3.svg", title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments"
//   }
// ]


// const communityContainer = document.querySelector(".community-container")


// communityCard.map(card => {
//   const cardElement = document.createElement("div")
//   const cardContent = `<div class="col-lg-4 col-md-4 col-sm-4 d-flex flex-column align-items-center p-4 member-card ">
//                     <img src="${card.imageUrl}" alt="">
//                     <h1 class="">${card.title}</h1>
//                     <p>${card.description}
//                     </p>
//                 </div>`;
//   cardElement.innerHTML = cardContent;
//   communityContainer.appendChild(cardElement);
// })