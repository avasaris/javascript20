let a = 6;
let b = "Hello";

let inputIn1 = document.querySelector('.input-in');
let inputIn2 = document.querySelector('.input-in2');
let button = document.querySelector('button');
let divOut = document.querySelector('.out');
let divOut2 = document.querySelector('.out2');

// let y = document.querySelector('.input-2');
// y.style = 'border: 2px solid red';
// console.log(y);

console.clear();

button.onclick = function () {
    // console.log("Pushed");
    // let b = +inputIn.value;
    // let r = b * 10;
    // divOut.innerHTML = "<b>" + r + "</b>";
    // inputIn.value = "";
    let i1 = +inputIn1.value;
    let i2 = +inputIn2.value;
    divOut.innerHTML = i1 + i2;
    let i3 = parseInt(inputIn1.value);
    let i4 = parseInt(inputIn2.value);
    divOut2.innerHTML = i3 + i4;

}