/* =========================
   CART COUNTER
========================= */

const cartCount = document.getElementById("cart-count");

let count = localStorage.getItem("cartCount");

if(count === null){
    count = 0;
}else{
    count = Number(count);
}

cartCount.textContent = count;

/* =========================
   ADD TO CART BUTTON
========================= */

const addCartBtn =
document.querySelector(".add-cart-btn");

if(addCartBtn){

    addCartBtn.addEventListener("click", () => {

        count++;

        cartCount.textContent = count;

        localStorage.setItem(
            "cartCount",
            count
        );

        alert("Product Added To Cart");

    });

}

/* =========================
   RELATED PRODUCTS
========================= */

const relatedCards =
document.querySelectorAll(".related-card");

relatedCards.forEach(card => {

    card.addEventListener("click", () => {

        window.location.href =
        "product-detail.html";

    });

});

/* =========================
   SIGN IN BUTTON
========================= */

const signIn =
document.querySelector(".signin");

if(signIn){

    signIn.addEventListener("click", () => {

        window.location.href =
        "signin.html";

    });

}

/* =========================
   CART BUTTON
========================= */

const cart =
document.querySelector(".cart");

if(cart){

    cart.addEventListener("click", () => {

        window.location.href =
        "cart.html";

    });

}