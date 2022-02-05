// переписать прошлое домашнее задание с помощью input или div

function sum() {
    let a = document.getElementById('first_number').value;
    let b = document.getElementById('second_number').value;

    return +a + +b;
}
function subtract(a, b) {
    a = document.getElementById('first_number').value;
    b = document.getElementById('second_number').value;
    return a - b;
}
function multiply(a, b) {
    a = document.getElementById('first_number').value;
    b = document.getElementById('second_number').value;
    return a * b;
}
function divide(a, b) {
    a = document.getElementById('first_number').value;
    b = document.getElementById('second_number').value;
    return a / b;
}

/* замена цвета div по клику */ 

function yellow() {
    document.getElementById("blue_id").style.backgroundColor = '#ffff00';
}
function green() {
    document.getElementById("red_id").style.backgroundColor = '	#008000';
}
/* замена цвета div по клику */

// простая галерея 

function imgNext() {
    let catImage = document.getElementById('catImage');
    catImage.src= "https://ichef.bbci.co.uk/news/800/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg.webp";
}
function imgBack() {
    let catImage = document.getElementById('catImage');
    catImage.src= "https://ichef.bbci.co.uk/news/640/cpsprodpb/14A82/production/_116301648_gettyimages-1071204136.jpg";
}


