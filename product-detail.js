/* =========================
   CART COUNTER
========================= */

const cartCount = document.getElementById("cart-count");

let count = Number(localStorage.getItem("cartCount")) || 0;

if(cartCount){
    cartCount.textContent = count;
}

/* =========================
   PRODUCTS DATA
========================= */

const products = {

"ECM-6500 PLUS FAST COOL":{
    price:"Rs. 35,100",
    brand:"Super Asia",

    description: `
Features:
• Top loading cooling box for Re-Freezable ice packs included for ultimate cooling
• 6 Re-Freezable ICE packs for extra cooling
• Designed for performance with powerful air flow & cooling efficiency
• Powerful & energy efficient motor
• High efficiency anti-bacterial three sides honeycomb evaporative pad for optimum cooling
• Powerful air throw with auto swing for uniform cooling in the room
• Fan based cooling for efficient circulation of air
• Two speed fan control to adjust air flow according to the requirement
• Shock & rust proof plastic body
• Large water tank capacity for longer cooling
• Maintain continuous water supply system with float valve
• Low maintenance & long lasting life
• Strong Wheels with four way movement for convenient & easy mobility

Specifications:
Net Weight: 33kg
Gross Weight: 36kg
    `,

    images:[
        "images/cooler-ecm-6500-plus.1.png",
        "images/cooler-ecm-6500-plus.2.png",
        "images/cooler-ecm-6500-plus.3.png",
        "images/cooler-all.png"
    ]
},

"ECM-4600 PLUS DC EASY COOL":{
    price:"Rs. 21,800",
    brand:"Super Asia",
    images:[
        "images/cooler-ecm-4600-plus.1.png",
        "images/cooler-ecm-4600-plus.2.png",
        "images/cooler-ecm-4600-plus.3.png",
        "images/cooler-ecm-4600-plus.4.png",
        "images/cooler-all.png"
    ]
},

"ECM-4900 PLUS DC QUICK COOL":{
    price:"Rs. 24,800",
    brand:"Super Asia",
    images:[
        "images/cooler-ecm-4900-plus.1.png",
        "images/cooler-ecm-4900-plus.2.png",
        "images/cooler-ecm-4900-plus.3.png",
        "images/cooler-ecm-4900-plus.4.png",
        "images/cooler-all.png"
    ]
},

"ECM-5000 PLUS COOL STAR":{
    price:"Rs. 32,400",
    brand:"Super Asia",
    images:[
        "images/cooler-ecm-5000-plus.1.png",
        "images/cooler-ecm-5000-plus.2.png",
        "images/cooler-all.png"
    ]
},

"ECM-5500 PLUS JET COOL":{
    price:"Rs. 32,400",
    brand:"Super Asia",
    images:[
        "images/cooler-ecm-5500-plus.1.png",
        "images/cooler-ecm-5500-plus.2.png",
        "images/cooler-ecm-5500-plus.3.png",
        "images/cooler-ecm-5500-plus.4.png",
        "images/cooler-all.png"
    ]
},

"ECM-4500 PLUS DC SUPER COOL":{
    price:"Rs. 20,600",
    brand:"Super Asia",
    images:[
        "images/cooler-ecm-4500-plus.1.png",
        "images/cooler-ecm-4500-plus.2.png",
        "images/cooler-all.png"
    ]
},

"ECM-4600 PLUS INVERTER EASY COOL":{
    price:"Rs. 34,700",
    brand:"Super Asia",
    images:[
        "images/cooler-ecm-4600-plus-inverter.1.png",
        "images/cooler-ecm-4600-plus-inverter.2.png",
        "images/cooler-ecm-4600-plus-inverter.3.png",
        "images/cooler-ecm-4600-plus-inverter.4.png",
        "images/cooler-all.png"
    ]
},

"ECM-4700 AUTO AC/DC INVERTER":{
    price:"Rs. 29,300",
    brand:"Super Asia",
    images:[
        "images/cooler-ecm-4700-auto.1.png",
        "images/cooler-ecm-4700-auto.2.png",
        "images/cooler-all.png"
    ]
},

"ECM-4500 DC SUPER COOL":{
    price:"Rs. 20,700",
    brand:"Super Asia",
    images:[
        "images/cooler-ecm-4500-dc.1.png",
        "images/cooler-ecm-4500-dc.2.png",
        "images/cooler-ecm-4500-dc.3.png",
        "images/cooler-all.png"
    ]
},

"JC-777 PLUS SUPER SONIC":{
    price:"Rs. 30,500",
    brand:"Super Asia",
    images:[
        "images/cooler-jc-777-plus.1.png",
        "images/cooler-jc-777-plus.2.png",
        "images/cooler-jc-777-plus.3.png",
        "images/cooler-all.png"
    ]
},

"ECM-4600 AUTO INVERTER EASY COOL":{
    price:"Rs. 36,200",
    brand:"Super Asia",
    images:[
        "images/cooler-ecm-4600-auto.1.png",
        "images/cooler-ecm-4600-auto.2.png",
        "images/cooler-ecm-4600-auto.3.png",
        "images/cooler-all.png"
    ]
},

"ECM-7000 PLUS TURBO COOL":{
    price:"Rs. 30,500",
    brand:"Super Asia",
    images:[
        "images/cooler-ecm-7000-plus.1.png",
        "images/cooler-ecm-7000-plus.2.png",
        "images/cooler-ecm-7000-plus.3.png",
        "images/cooler-ecm-7000-plus.4.png",
        "images/cooler-all.png"
    ]
}

};


/* =========================
   LOAD PRODUCT
========================= */

const selectedProduct =
JSON.parse(localStorage.getItem("selectedProduct"));

if(selectedProduct){

    document.getElementById("product-name").textContent =
    selectedProduct.name;

    document.getElementById("product-price").textContent =
    selectedProduct.price;

    const productData =
    products[selectedProduct.name];

    if(productData){

        document.getElementById("product-brand")
        .textContent =
        "Brand: " + productData.brand;

        const descriptionBox =
        document.getElementById("product-description");

        if(descriptionBox && productData.description){

            descriptionBox.innerHTML =
            productData.description.replace(/\n/g,"<br>");

        }

        const mainImage =
        document.getElementById("main-image");

        mainImage.src =
        productData.images[0];

        const thumbnails =
        document.querySelector(".image-thumbnails");

        thumbnails.innerHTML = "";

        productData.images.forEach(img => {

            const thumb =
            document.createElement("img");

            thumb.src = img;

            thumb.classList.add("thumb");

            thumb.addEventListener("click",()=>{

                mainImage.src = img;

            });

            thumbnails.appendChild(thumb);

        });
        let currentIndex = 0;

const leftArrow =
document.querySelector(".left-arrow");

const rightArrow =
document.querySelector(".right-arrow");

function showImage(index){

    currentIndex = index;

    mainImage.src =
    productData.images[currentIndex];

}

leftArrow.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex =
        productData.images.length - 1;
    }

    showImage(currentIndex);

});

rightArrow.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= productData.images.length){
        currentIndex = 0;
    }

    showImage(currentIndex);

});

const thumbs =
document.querySelectorAll(".thumb");

thumbs.forEach((thumb,index)=>{

    thumb.addEventListener("click",()=>{

        showImage(index);

    });

});

    }

}
