let buttonX = document.querySelector('.menuButtonX');
let buttonB = document.querySelector('.menuButtonB');
let menu = document.querySelector('.menu');


function burguerButton() {
    if(menu.style.display != 'none' ) {
        menu.style.display = 'none'
        buttonB.style.display = 'block'
        buttonX.style.display = 'none'
    }else {
        menu.style.display = 'block'
        buttonB.style.display = 'none'
        buttonX.style.display = 'block'
        buttonX.style.position = 'fixed'
    }
}