let links = document.querySelector(".links");
let burger = document.querySelector(".burger");
let burgerX = document.querySelector(".burgerX");

function showMenu() {
  if (links.style.display == "none") {
    links.style.display = "grid";
    burger.style.display = "none";
    burgerX.style.display = "block";
  } else {
    links.style.display = "none";
    burger.style.display = "block";
    burgerX.style.display = "none";
  }
}
