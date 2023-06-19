let error = document.getElementById('error');
let input = document.querySelector('input');
let main = document.querySelector(".main");
let thanks = document.querySelector('.thanks');

function emailInvalid() {
    if(input.value == '') {
        input.style.backgroundColor = 'hsl(4, 89%, 89%)'
        input.style.color = 'hsl(4, 100%, 67%)'
        input.style.borderColor = 'hsl(10, 100%, 69%)'
        error.style.display = 'flex'
    } else {
        successful()
    }
}

function successful() {
    main.style.display = 'none'
    thanks.style.display = 'block'
}

function dismiss() {
    main.style.display = 'block'
    thanks.style.display = 'none'
    input.value = ''
    input.style.backgroundColor = 'transparent'
    input.style.color = 'black'
    error.style.display = 'none'
    input.style.borderColor = 'hsla(240, 2%, 61%, 0.185)'
}