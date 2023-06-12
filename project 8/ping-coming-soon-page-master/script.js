let input = document.getElementById("email");
let button = document.querySelector(".notify");
let error = document.getElementById("error");

function invalid() {
  if (input.value == '' ){
    error.style.display = "flex";
    input.style.borderColor = 'red'
  } else {
    error.style.display = 'none'
    input.style.borderColor = 'hsl(0, 0%, 59%)';
  }
}
