
let headerCategoriesContainer = document.querySelector(".header__categories-container");
let headerNavlistContact = document.querySelector(".header__nav-list-contact");
let headerNavlist = document.querySelector(".header__nav-list");

let hambugerMenu = document.querySelector(".header__hamburger-menu");

hambugerMenu.addEventListener("click", (e) =>{

    headerCategoriesContainer.classList.toggle("show-flexbox");

    headerNavlistContact.classList.toggle("show-flexbox")
    headerNavlist.classList.toggle("show-flexbox")

    console.log("clicked")
});