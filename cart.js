/* =========================
   CART COUNTER
========================= */

const cartCount = document.getElementById("cart-count");

let count = localStorage.getItem("cartCount");

if(count === null){
    count = 1;
}else{
    count = Number(count);
}

cartCount.textContent = count;

/* =========================
   QUANTITY CONTROLS
========================= */

const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const quantity = document.querySelector(".quantity");

let qty = Number(quantity.textContent);

plusBtn.addEventListener("click", () => {

    qty++;

    quantity.textContent = qty;

});

minusBtn.addEventListener("click", () => {

    if(qty > 1){

        qty--;

        quantity.textContent = qty;

    }

});

/* =========================
   REMOVE ITEM
========================= */

const removeBtn =
document.querySelector(".remove-btn");

const cartItem =
document.querySelector(".cart-item");

removeBtn.addEventListener("click", () => {

    cartItem.style.display = "none";

    count--;

    if(count < 0){
        count = 0;
    }

    cartCount.textContent = count;

    localStorage.setItem(
        "cartCount",
        count
    );

});

/* =========================
   CHECKOUT BUTTON
========================= */

const checkoutBtn =
document.querySelector(".checkout-btn");

checkoutBtn.addEventListener("click", () => {

    window.location.href =
    "signin.html";

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
   CART SAVE
========================= */

window.addEventListener("beforeunload", () => {

    localStorage.setItem(
        "cartCount",
        count
    );

});