/* Cuando hago click en .menu__responsive, .navbar TOGGLE "active"*/
const menuBtn = document.querySelector(".menu__responsive");
const nav = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});