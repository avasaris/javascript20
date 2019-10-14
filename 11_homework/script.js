function printArray(arr, selector) {

    let out = "";
    if (arr && arr.length) out = JSON.stringify(arr);

    divOut = document.querySelector(selector).innerHTML = out;
}

/* 
Task 1.     Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. При нажатии кнопки, 
            функция читает содержимое input и добавляет содержимое в массив, после чего выводит 
            содержимое массива в div.out-1.
*/

let arr1 = [];

document.querySelector("button.u-2__push").onclick = () => {
    const inp1 = document.querySelector("input.u-1").value;

    if (inp1 == "") return;

    arr1.push(inp1);

    printArray(arr1, "div.out-1");
}

/*
Task 2.     Добавьте к предыдущему заданию кнопку button.u-2__pop, при нажатии которой, к массиву arr1
            применяется метод pop, после чего массив выводится в div.out-1
*/

document.querySelector("button.u-2__pop").onclick = () => {

    arr1.pop();

    printArray(arr1, "div.out-1");
}

/*
Task 3.     Добавьте к заданию 1 кнопку button.u-3__shift, которая применяет к массиву arr1
            метод shift (читать про метод shift). После применения shift, массив arr1 выводится в div.out-1.
*/

document.querySelector("button.u-3__shift").onclick = () => {

    arr1.shift();

    printArray(arr1, "div.out-1");
}

/*
Task 4.     Добавьте к заданию 1 кнопку button.u-4__unshift, которая применяет к массиву arr1 метод unshift (
            читать про метод unshift). После применения unshift, массив arr1 выподится в div.out-1. Надеюсь, вы
            догадаетесь проверять input на пустоту перед применением unshift. Надеюсь, вы это сделали и в первой задаче?
*/

document.querySelector("button.u-4__unshift").onclick = () => {
    const inp4 = document.querySelector("input.u-4").value;

    if (inp4 == "") return;

    arr1.unshift(inp4);

    printArray(arr1, "div.out-1");
}
