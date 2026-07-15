/* =========================
   CART COUNTER
========================= */

const cartCount = document.getElementById("cart-count");

let count = localStorage.getItem("cartCount");

if(count === null){
    count = 0;
}

if(cartCount){
    cartCount.textContent = count;
}

/* =========================
   CONTACT FORM
========================= */

const contactForm =
document.getElementById("contact-form");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Message Sent Successfully!");

        contactForm.reset();

    });

}

/* =========================
   CART BUTTON
========================= */

const cartBtn =
document.querySelector(".cart");

if(cartBtn){

    cartBtn.addEventListener("click", () => {

        window.location.href = "cart.html";

    });

}

/* =========================
   SIGN IN BUTTON
========================= */

const signInBtn =
document.querySelector(".signin");

if(signInBtn){

    signInBtn.addEventListener("click", () => {

        window.location.href = "signin.html";

    });

}

/* =========================
   PHONE NUMBER CLICK
========================= */

const phoneBox =
document.querySelector(".info-box");

if(phoneBox){

    phoneBox.style.cursor = "pointer";

}

/* =========================
   PAGE LOADED
========================= */

window.addEventListener("load", () => {

    console.log(
        "Liaquat Electronics Contact Page Loaded"
    );

});