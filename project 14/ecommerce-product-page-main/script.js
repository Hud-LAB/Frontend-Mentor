let img = document.getElementById("imgMain");
let imgZ = document.getElementById("imgZoom");
let imgs = document.querySelectorAll(".img");
let shadow = document.getElementById("shadow");
let zoom = document.querySelector(".zoomBox");
let X = document.getElementById("x");
let arrowR = document.querySelector(".arrowR");
let arrowL = document.querySelector(".arrowL");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let result = document.getElementById("result");
let add = document.getElementById("buttonAdd");
let amountT = document.querySelector(".amountT");
let valorT = document.querySelector(".valorT");
let del = document.querySelector(".delete");
let cart = document.getElementById("cart");
let card = document.getElementById("card");
let checkout = document.querySelector(".checkout");
let notification = document.querySelector(".notification");

let images = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

let count = 0;
let currentImage = 1;
let amount = 0;
let total = 0;
let newAdd = 0;
let valor = 125.0;
let test = 0;


img.addEventListener("click", () => {
  shadow.style.display = "block";
  zoom.style.display = "block";
});

X.addEventListener("click", () => {
  shadow.style.display = "none";
  zoom.style.display = "none";
});

imgs[0].addEventListener("click", () => {
  img.src = images[0];
});

imgs[1].addEventListener("click", () => {
  img.src = images[1];
});

imgs[2].addEventListener("click", () => {
  img.src = images[2];
});

imgs[3].addEventListener("click", () => {
  img.src = images[3];
});

imgs[4].addEventListener("click", () => {
  imgZ.src = images[0];
});

imgs[5].addEventListener("click", () => {
  imgZ.src = images[1];
});

imgs[6].addEventListener("click", () => {
  imgZ.src = images[2];
});

imgs[7].addEventListener("click", () => {
  imgZ.src = images[3];
});

arrowL.addEventListener("click", () => {
  if (currentImage == 1) {
    imgZ.src = "images/image-product-4.jpg";
    currentImage = 4;
    console.log(currentImage);
  } else if (currentImage == 4) {
    imgZ.src = "images/image-product-3.jpg";
    currentImage = 3;
    console.log(currentImage);
  } else if (currentImage == 3) {
    imgZ.src = "images/image-product-2.jpg";
    currentImage = 2;
    console.log(currentImage);
  } else if (currentImage == 2) {
    imgZ.src = "images/image-product-1.jpg";
    currentImage = 1;
    console.log(currentImage);
  }
});

arrowR.addEventListener("click", () => {
  if (currentImage == 1) {
    imgZ.src = "images/image-product-2.jpg";
    currentImage = 2;
    console.log(currentImage);
  } else if (currentImage == 2) {
    imgZ.src = "images/image-product-3.jpg";
    currentImage = 3;
    console.log(currentImage);
  } else if (currentImage == 3) {
    imgZ.src = "images/image-product-4.jpg";
    currentImage = 4;
    console.log(currentImage);
  } else if (currentImage == 4) {
    imgZ.src = "images/image-product-1.jpg";
    currentImage = 1;
    console.log(currentImage);
  }
});

plus.addEventListener("click", () => {
  amount++;
  result.innerHTML = amount;
});

minus.addEventListener("click", () => {
  amount--;
  if (amount < 0) {
    amount = 0;
  } else {
    result.innerHTML = amount;
  }
});

add.addEventListener("click", () => {
  count = count + amount;
  test = test + amount;

  let total = valor * count;
  valorT.innerHTML = total.toFixed(2);
  amountT.innerHTML = count;
  notification.style.display = "flex";
  notification.innerHTML = test;
});

del.addEventListener("click", () => {
  count = 0;
  amount = 0;

  result.innerHTML = amount;
  amountT.innerHTML = count;
  valorT.innerHTML = total.toFixed(2);
});

cart.addEventListener("click", () => {
  if (card.style.display == "none") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
  test = 0;
  notification.innerHTML = 0;
  notification.style.display = "none";
});

checkout.addEventListener("click", () => {
  card.style.display = "none";
});
