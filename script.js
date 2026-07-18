const cartCount = document.getElementById("cart-count");

if(cartCount){

    const count =
    localStorage.getItem("cartCount") || 0;

    cartCount.textContent = count;

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