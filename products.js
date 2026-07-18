/* =========================
   CART COUNTER
========================= */

const cartCount = document.getElementById("cart-count");

let count = localStorage.getItem("cartCount") || 0;

if(cartCount){
    cartCount.textContent = count;
}

/* =========================
   FILTER BUTTONS
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});

/* =========================
   SEARCH PRODUCTS
========================= */

const searchInput = document.getElementById("searchInput");

const productCards = document.querySelectorAll(".product-card");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        const searchValue = searchInput.value.toLowerCase();

        productCards.forEach(card => {

            const productName =
            card.querySelector("h3").textContent.toLowerCase();

            if(productName.includes(searchValue)){

                card.style.display = "block";

            }else{

                card.style.display = "none";

            }

        });

    });

}

/* =========================
   VIEW DETAILS BUTTON
========================= */

const detailButtons =
document.querySelectorAll(".product-card button");

detailButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card =
        button.closest(".product-card");

        const product = {

            name:
            card.querySelector("h3").textContent,

            price:
            card.querySelector("p").textContent,

            image:
            card.querySelector("img").getAttribute("src")

        };

        localStorage.setItem(
            "selectedProduct",
            JSON.stringify(product)
        );

        window.location.href =
        "product-detail.html";

    });

});

/* =========================
   PRODUCT CARD HOVER EFFECT
========================= */

productCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "0.3s";

    });

});
const cart =
document.querySelector(".cart");

if(cart){

    cart.addEventListener("click", () => {

        window.location.href =
        "cart.html";

    });

}