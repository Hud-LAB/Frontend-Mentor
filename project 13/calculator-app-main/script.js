let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

one.addEventListener("click", function () {
  var body = document.querySelector("body");
  var toggle = document.getElementById('circle');
  body.classList.remove("active2");
  body.classList.remove("active3");
  toggle.style.left='0%';
});

two.addEventListener("click", function () {
  var body = document.querySelector("body");
  var toggle = document.getElementById('circle');
  body.classList.add("active2");
  body.classList.remove("active3");
  toggle.style.left='36%';
});

three.addEventListener("click", function () {
  var body = document.querySelector("body");
  var toggle = document.getElementById('circle');
  body.classList.add("active3");
  body.classList.remove('active2');
  toggle.style.left='65%';
});

function del() {
  let value = document.getElementById("screen").value;
  document.getElementById("screen").value = value.substr(0, value.length - 1);
}
