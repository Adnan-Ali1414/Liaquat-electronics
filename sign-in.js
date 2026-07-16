// /* =========================
//    CART COUNTER
// ========================= */

// const cartCount = document.getElementById("cart-count");

// let count = localStorage.getItem("cartCount");

// if(count === null){
//     count = 0;
// }

// if(cartCount){
//     cartCount.textContent = count;
// }

// /* =========================
//    SIGN IN FORM
// ========================= */

// const signInForm =
// document.getElementById("signin-form");

// if(signInForm){

//     signInForm.addEventListener("submit", function(e){

//         e.preventDefault();

//         const email =
//         document.getElementById("email").value;

//         const password =
//         document.getElementById("password").value;

//         if(email === "" || password === ""){

//             alert("Please fill all fields");

//             return;
//         }

//         localStorage.setItem("userEmail", email);

//         alert("Sign In Successful");

//         window.location.href = "index.html";

//     });

// }

// /* =========================
//    CREATE ACCOUNT BUTTON
// ========================= */

// const createBtn =
// document.querySelector(".create-btn");

// if(createBtn){

//     createBtn.addEventListener("click", () => {

//         alert("Create Account Page Coming Soon");

//     });

// }

// /* =========================
//    CART BUTTON
// ========================= */

// const cartBtn =
// document.querySelector(".cart");

// if(cartBtn){

//     cartBtn.addEventListener("click", () => {

//         window.location.href = "cart.html";

//     });

// }

// /* =========================
//    REMEMBER ME
// ========================= */

// const rememberCheckbox =
// document.querySelector('input[type="checkbox"]');

// if(rememberCheckbox){

//     const savedEmail =
//     localStorage.getItem("savedEmail");

//     if(savedEmail){

//         document.getElementById("email").value =
//         savedEmail;

//         rememberCheckbox.checked = true;
//     }

//     rememberCheckbox.addEventListener("change", () => {

//         const email =
//         document.getElementById("email").value;

//         if(rememberCheckbox.checked){

//             localStorage.setItem(
//                 "savedEmail",
//                 email
//             );

//         }else{

//             localStorage.removeItem(
//                 "savedEmail"
//             );

//         }

//     });

// }