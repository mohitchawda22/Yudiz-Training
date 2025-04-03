// service section mapping

const items = [
    { id: 1, img1: "assests/img/service0.jpg", img2: 'assests/img/Pipe-Installation.svg', title: 'Plumbing Installation' },
    { id: 2, img1: "assests/img/service2.jpg", img2: 'assests/img/Pipe-Plumbing.svg', title: 'Plumbing Installation' },
    { id: 3, img1: "assests/img/service3.jpg", img2: 'assests/img/servicelogo.svg', title: 'Plumbing Installation' },
    { id: 4, img1: "assests/img/service4.jpg", img2: 'assests/img/pipelogo.svg', title: 'Plumbing Installation' },
    { id: 5, img1: "assests/img/service5.jpg", img2: 'assests/img/Pipe-Line.svg', title: 'Plumbing Installation' },
    { id: 6, img1: "assests/img/service6.jpg", img2: 'assests/img/plunglogo.svg', title: 'Plumbing Installation' },
];

const mapContainer = document.getElementsByClassName("map-container")[0]


const html = items.map(item =>
    `<div class="col-lg-4 col-md-6 col-sm-12 service-card-bottom">
                    <div class="card service-card">
    <img src="${item.img1}" class="card-img-top" alt="">
                        <div class="card-body">
                            <img src="${item.img2}" alt="">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur. Adipiscing quis ornare hac
                                convallis a diam gravida in. Ac in tempus leo dolor nisl donec erat consequat.</p>
                            <a href="#" class="">Go somewhere <img src="assests/img/Right Arrow.svg" alt=""></a>
                        </div>
                        </div>
                        </div>`
).join('');

mapContainer.innerHTML = html


// pricing card mapping

const priceItems = [
    { id: 1, title: 'Residential Plumbing' ,price:"$199",listitem1:"Free Diagnostics & Consultation" },
    { id: 2, title: 'Commercial Plumbing' ,price:"$499",listitem1:"Installations, Repairs, And Replacements" },
    { id: 3, title: 'Service & Repair' ,price:"$399",listitem1:"Replace Spare Parts" },
];

const pricingContainer=document.getElementsByClassName("pricing-map")[0]

const priceCard=priceItems.map(item=>
    `<div class="col-lg-4 col-md-12 pricing-card-bottom">
    <div class="card pricing-card">
        <div class="card-body">
            <h6 class="card-title">${item.title}</h6>
            <h6 class="card-subtitle mb-2">${item.price}<span>/Month</span></h6>
            <ul class="">
                <li><img src="assests/img/Check.svg" alt=""> ${item.listitem1}</li>
                <li><img src="assests/img/Check.svg" alt=""> Plumbing Repairs</li>
                <li><img src="assests/img/Check.svg" alt=""> Emergency Plumbing</li>
                <li><img src="assests/img/Check.svg" alt=""> Sewer & Drain Cleaning</li>
                <li><img src="assests/img/Check.svg" alt=""> Trenchless Sewer Replacement</li>
                <li><img src="assests/img/Check.svg" alt=""> Heater Installation & Replacement, Repair</li>
            </ul>
            <a href="#" class="pricing-btn">Get Started</a>
        </div>
    </div>
</div>`
).join('')

pricingContainer.innerHTML=priceCard


// works cards mapping 

// const worksItems = [
//     { id: 1, img: 'assests/img/featureimg1.jpg' },
//     { id: 2, img: 'assests/img/featureimg2.jpg' },
//     { id: 3, img: 'assests/img/featureimg3.jpg' },
//     { id: 4, img: 'assests/img/featureimg4.jpg' },
//     { id: 5, img: 'assests/img/featureimg5.jpg' },
//     { id: 6, img: 'assests/img/featureimg6.jpg' },
// ];

// const worksContainer=document.getElementsByClassName("works-map")[0]

// const worksCard=worksItems.map(item=>
//     `<div class="col-md-4 col-sm-12 feature-img">
//                     <img src="${item.img}" alt="" class="featureimg1">
//                     <div class="middle">
//                         <p class="text">Water Line Repair</p>
//                         <span class="">Plumbing</span>
//                     </div>
//                 </div>`
// ).join('')

// worksContainer.innerHTML=worksCard


// customer review card mapping..

const customerItems= [
    { id: 1, img: 'assests/img/customerlogo.jpg',name:"Michael Adam",job:"Hotel Manager" },
    { id: 2, img: 'assests/img/customerlogo2.jpg',name:"Wade Warren",job:"Marketing Coordinator" },
    { id: 3, img: 'assests/img/customerlogo.jpg',name:"Michael Adam",job:"Hotel Manager" },
    { id: 4, img: 'assests/img/customerlogo2.jpg',name:"Michael Adam",job:"Hotel Manager" },
    { id: 5, img: 'assests/img/customerlogo.jpg',name:"Michael Adam",job:"Hotel Manager" },
    { id: 6, img: 'assests/img/customerlogo2.jpg',name:"Michael Adam",job:"Hotel Manager" },
];

const customerContainer=document.getElementsByClassName("customer-slider")[0]

const customerCard=customerItems.map(item=>`
    <div class="customer-card">
                        <div class="star-svg">
                            <i class="fa-solid fa-star" style="color: #388eff;"></i>
                            <i class="fa-solid fa-star" style="color: #388eff;"></i>
                            <i class="fa-solid fa-star" style="color: #388eff;"></i>
                            <i class="fa-solid fa-star" style="color: #388eff;"></i>
                            <i class="fa-solid fa-star" style="color: #388eff;"></i>
                        </div>
                        <p class="text">Lorem ipsum dolor sit amet consectetur. Pretium malesuada pulvinar sed
                            feugiat sem est nisl pharetra. Facilisis ridiculus amet commodo aliquet a phasellus
                            malesuada. Ac id quam mattis neque. Urna tellus ut maecenas interdum. Euismod egestas
                            scelerisque.</p>
                        <div class="d-flex gap-3">
                            <img src="${item.img}" alt="">
                            <div class="">
                                <h6>${item.name}</h6>
                                <p>${item.job}</p>
                            </div>
                        </div>
                    </div>
    `
).join('');

customerContainer.innerHTML=customerCard

// blog container mapping..

const blogItems= [
    { id: 1, img: 'assests/img/blogimg1.png',title:"The Do’s and Don’ts of Fixing a Blocked Drain" },
    { id: 2, img: 'assests/img/blogimg2.png',title:"8 Most Common Plumbing Problems" },
    { id: 3, img: 'assests/img/blogimg3.png',title:"The Best Water Filters Of Our Choice" },
    { id: 4, img: 'assests/img/blogimg4.png',title:"General Maintenance For Your Toilet" },
]; 

const blogContainer=document.getElementsByClassName("blog-card-container")[0]

const blogCard=blogItems.map(item=>
    `<div class="col-lg-6 col-md-12">
                    <div class="blog-card">
                        <div class="row g-0">
                            <div class="col-md-6">
                                <img src="${item.img}" class=" rounded-start h-100 w-100" alt="...">
                                <div class="tips">
                                    <h6>Tips & Tricks</h6>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="body h-100">
                                    <h5 class="title">${item.title}</h5>
                                    <p class="date"><img src="assests/img/Calendar.svg" alt="" class=""> January 4, 2022
                                    </p>
                                    <p class="text">The Do’s and Don’ts of Fixing a Blocked Drain Lorem ipsum dolor sit
                                        amet consectetur</p>
                                    <a href="">Read More <img src="assests/img/Arrow-Up-Right color.svg" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `
).join('')

blogContainer.innerHTML=blogCard