let shareInfo = document.querySelector(".shareInfo");
let links = document.querySelector(".links");
let shareLink = document.querySelector(".shareLink");
let info = document.querySelector(".info");
let popUp = document.querySelector(".popUp");
let triangle = document.querySelector(".triangle");

// function showLinks() {
//     if (links.style.display == "none") {
//       links.style.display = "grid";
//       info.style.display = "none";
//     } else {
//       links.style.display = "none";
//       info.style.display = "grid";
//     }
// }

shareInfo.addEventListener("click", () => {
  links.style.display = "grid";
  info.style.display = "none";
});

shareLink.addEventListener("click", () => {
  links.style.display = "none";
  info.style.display = "grid";
});

popUp.addEventListener("click", () => {
  if (links.style.display == "none") {
    links.style.display = "grid";
    triangle.style.display = "grid"
  } else {
    links.style.display = "none";
    triangle.style.display = "none"
  }
});
