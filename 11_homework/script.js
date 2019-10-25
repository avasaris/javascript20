/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

function printArray(arr, selector) {
    let out = '';
    if (arr && arr.length) out = JSON.stringify(arr);

    document.querySelector(selector).innerHTML = out;
}

/* 
Task 1.     Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. При нажатии кнопки, 
            функция читает содержимое input и добавляет содержимое в массив, после чего выводит 
            содержимое массива в div.out-1.
*/

const arr1 = [];

document.querySelector('button.u-2__push').onclick = () => {
    const inp1 = document.querySelector('input.u-1').value;

    if (inp1 === '') return;

    arr1.push(inp1);

    printArray(arr1, 'div.out-1');
};

/*
Task 2.     Добавьте к предыдущему заданию кнопку button.u-2__pop, при нажатии которой, к массиву arr1
            применяется метод pop, после чего массив выводится в div.out-1
*/

document.querySelector('button.u-2__pop').onclick = () => {
    arr1.pop();

    printArray(arr1, 'div.out-1');
};

/*
Task 3.     Добавьте к заданию 1 кнопку button.u-3__shift, которая применяет к массиву arr1
            метод shift (читать про метод shift). После применения shift, массив arr1 выводится в div.out-1.
*/

document.querySelector('button.u-3__shift').onclick = () => {
    arr1.shift();

    printArray(arr1, 'div.out-1');
};

/*
Task 4.     Добавьте к заданию 1 кнопку button.u-4__unshift, которая применяет к массиву arr1 метод unshift (
            читать про метод unshift). После применения unshift, массив arr1 выподится в div.out-1. Надеюсь, вы
            догадаетесь проверять input на пустоту перед применением unshift. Надеюсь, вы это сделали и в первой задаче?
*/

document.querySelector('button.u-4__unshift').onclick = () => {
    const inp4 = document.querySelector('input.u-4').value;

    if (inp4 === '') return;

    arr1.unshift(inp4);

    printArray(arr1, 'div.out-1');
};

/*
Task 5.     Обьявите массив arr5, добате два элемента input, в первый пользователь может ввести индекс элемента, 
            во второй - количество. Добавьте кнопку, по нажатию на которую к массиву arr5 применяется метод splice. 
            Результат применения выводите в div.out-5.
            let arr5 = [3,14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
*/

const arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

printArray(arr5, 'div.out-5');

document.querySelector('button.u-5__splice').onclick = () => {
    const ind5 = document.querySelector('input.u-5-index').value;
    const cnt5 = document.querySelector('input.u-5-count').value;

    if (ind5 === '' || cnt5 === '') return;

    arr5.splice(ind5, cnt5);

    printArray(arr5, 'div.out-5');
};

/*
Task 6.		Напишите функцию funcPush, которая эмулирует работу метода push, функция, по нажатию кнопки:
                - читает содержимое input в переменную
                - вычисляет длину массива
                - присваивает массиву новый элемент, а в качестве индекса указывает длину массива
            Выведите массив на страницу
*/

let arr6 = [];

function funcPush(arr) {
    const arrCopy = arr.slice();

    const newElem = document.querySelector('input.u-6').value;
    if (newElem !== '') arrCopy[arrCopy.length] = newElem;

    return arrCopy;
}

document.querySelector('button.u-6').onclick = () => {
    arr6 = funcPush(arr6);
    printArray(arr6, 'div.out-6');
};

/*
Task 7.		Напишите функцию funcPop, которая эмулирует работу метода pop, функция, по нажатию кнопки:
				- удаляет последний элемент массива
			Выведите массив на страницу
*/

let arr7 = ['test1', 'test2', 'test3', 'test4', 'test5'];

printArray(arr7, 'div.out-7');

function funcPop(arr) {
    const arrCopy = arr.slice();

    arrCopy.length -= 1;

    return arrCopy;
}

document.querySelector('button.u-7').onclick = () => {
    arr7 = funcPop(arr7);
    printArray(arr7, 'div.out-7');
};

/*
Task 8.		Напишите функцию funcShift, которая эмулирует работу метода shift, функция, по нажатию кнопки:
                - cоздает новый массив где нулевым элементом выступает первый элемент исходного массива
            Выведите массив на страницу
*/

let arr8 = ['test1', 'test2', 'test3', 'test4', 'test5'];

printArray(arr8, 'div.out-8');

function funcShift(arr) {
    const retArr = [];

    for (let i = 1; i < arr.length; i++) retArr[i - 1] = arr[i];

    return retArr;
}

document.querySelector('button.u-8').onclick = () => {
    arr8 = funcShift(arr8);
    printArray(arr8, 'div.out-8');
};

/*
Task 9.		Напишите функцию funcUnShift, которая эмулирует работу метода unshift, функция, по нажатию кнопки:
                - читает содержимое input в переменную
                - создает новый массив где нулевым элементов задает считанную из input строку
                - дописывает остальные значения старого массива в новый
            Выведите массив на страницу
*/

let arr9 = ['test1', 'test2', 'test3', 'test4', 'test5'];

printArray(arr9, 'div.out-9');

function funcUnShift(inp, arr) {
    const retArr = [inp];

    for (let i = 0; i < arr.length; i++) retArr[i + 1] = arr[i];

    return retArr;
}

document.querySelector('button.u-9').onclick = () => {
    const inp9 = document.querySelector('input.u-9').value;
    if (inp9 === '') return;

    arr9 = funcUnShift(inp9, arr9);
    printArray(arr9, 'div.out-9');
};

/*
Task 10.		Создайте массив arr10, примените к массиву метод reverse (читать про метод reverse). После 
                применения reverse, массив arr10 выподится в div.out-10.
*/

const arr10 = [2, 4, 6, 8, 10, 'hello'];

printArray(arr10, 'div.out-10');

document.querySelector('button.u-10').onclick = () => {
    arr10.reverse();
    printArray(arr10, 'div.out-10');
};

/*
Task 11.		Создайте input.u-11__input и кнопку button.u-11__button. Объявите массив arr11. По нажатию 
                на кнопку, читайте содержимое input.u-11__input в переменную u11. Потом примените к массиву arr11 
                метод indexOf (читать про метод indexOf). Результат применения indexOf выводите на страницу в div.out-11. 
                Последовательно проверьте программу вводя в input числа 1, 3, 5, 12.
*/

const arr11 = [0, 2, 3, 7, 8, 5, 11];

document.querySelector('button.u-11__button').onclick = () => {
    let u11 = document.querySelector('input.u-11__input').value;
    if (u11 !== '') u11 = +u11;

    const ind = arr11.indexOf(u11);

    document.querySelector('div.out-11').innerHTML = ind;
};

/*
Task 12.		Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf. Программа должна:
                    - читать содержимое input в переменную;
                    - запускать цикл по массиву и сравнивать каждый элемент массива с введенным;
                    - если совпадение есть - останавливать цикл и выводить номер индекса на котором произошло совпадение;
                    - если совпадения нет выводить -1.
*/

const arr12 = [0, 2, 3, 7, 8, 5, 11];

function funcIndexOf(elem, arr) {
    let ret = -1;

    let match = false;
    let i = 0;
    while (!match && i < arr.length) {
        match = arr[i] === elem;
        i += 1;
    }
    if (match) ret = i - 1;

    return ret;
}

document.querySelector('button.u-12__button').onclick = () => {
    let u12 = +document.querySelector('input.u-12__input').value;
    if (u12 !== '') u12 = +u12;

    const ind = funcIndexOf(u12, arr12);

    document.querySelector('div.out-12').innerHTML = ind;
};

/*
Task 13.		Напишите функцию funcReverse, которая эмулирует работу метода reverse. Программа должна:
                    - cоздать новый пустой массив;
                    - перебирать старый массив с конца (массив создайте сами);
                    - по очереди по элементу присвоить значения в новый массив.
                Выведите новый массив.
*/

let arr13 = [2, 7, 'ddd', 8, 10, 'hello', {aa:"bb"}, [1,2,3]];

printArray(arr13, 'div.out-13');

function funcReverse(arr){
    const retArr = [];

    for(let i=arr.length-1; i>=0; i--) retArr.push(arr[i]);

    return retArr;
}

document.querySelector('button.u-13').onclick = () => {
    arr13 = funcReverse(arr13);
    printArray(arr13, 'div.out-13');
};
