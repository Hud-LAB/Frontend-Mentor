// var mount = document.querySelectorAll(".dolarMount");
// var annually = document.querySelectorAll(".dolarAnnually");

// let card = document.querySelector(".card");

// let checkBox = document.querySelector(".switch");

// checkBox.addEventListener("click", () => {
// //   for (const element of annually) {
// //     if (element.style.display == 'flex') {
// //       element.style.display = 'none';
// //     }else if (element.style.display == 'none') {
// //         element.style.display = 'flex'
// //     }
// //   }



//   if(checkBox.style.display === 'flex') {
//     checkBox.style.backgroundColor = 'red';
//   }
// });


const button = document.getElementById('switch');
button.addEventListener('click', myFunction);

function myFunction() {

  var monthPayment = document.getElementsByTagName('h3');
  var annuallyPayment = document.getElementsByTagName('h4');
  var i;
  var n;

  for (i = 0; i < monthPayment.length; i++) {
    for (n = 0; n < annuallyPayment.length; n++) {

      if (monthPayment[i].style.display == 'flex') {
        monthPayment[i].style.display = 'none';
        annuallyPayment[i].style.display = 'flex';
      }
      else {
        monthPayment[i].style.display = 'flex';
        annuallyPayment[i].style.display = 'none';

      }
    }
  }
}

