/* =========================
   LOAD CART
========================= */

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const summaryItems = document.getElementById("summary-items");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

/* =========================
   UPDATE COUNTER
========================= */

function updateCartCount() {

    cartCount.textContent = cart.length;

    localStorage.setItem(
        "cartCount",
        cart.length
    );

    summaryItems.textContent =
    cart.length;

}

/* =========================
   DISPLAY CART
========================= */

function displayCart() {

    cartItems.innerHTML = "";

    if(cart.length === 0){

        cartItems.innerHTML =
        "<h2>Your cart is empty</h2>";

        updateCartCount();

        return;

    }

    cart.forEach((product, index) => {

        cartItems.innerHTML += `

        <div class="cart-item">

            <img
            src="images/product-placeholder.png"
            alt="Product">

            <div class="item-details">

                <h3>${product.name}</h3>

                <p>Price: ${product.price}</p>

            </div>

            <button
            class="remove-btn"
            onclick="removeItem(${index})">
                Remove
            </button>

        </div>

        `;

    });

    updateCartCount();

}

/* =========================
   REMOVE ITEM
========================= */

function removeItem(index){

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

}

/* =========================
   CHECKOUT
========================= */

const checkoutBtn =
document.querySelector(".checkout-btn");

if(checkoutBtn){

    checkoutBtn.addEventListener("click", () => {

        window.location.href =
        "signin.html";

    });

}

/* =========================
   SIGN IN
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
   START
========================= */

displayCart();