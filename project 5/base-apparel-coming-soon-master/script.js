let input = document.querySelector(".input");
let error = document.querySelector(".error");
let errorSvg = document.querySelector(".errorSvg");

function send() {
  if (input.value == "") {
    error.style.display = "block";
    errorSvg.style.display = "inline";
    input.style.borderColor = "red";
  } else {
    error.style.display = "none";
    errorSvg.style.display = "none";
    input.style.borderColor = "#f8bfbf";
  }
}
