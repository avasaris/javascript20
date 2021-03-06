
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1(key, val) {
    val = JSON.stringify(val);
    localStorage.setItem(key, val);
    console.log(localStorage);
}

document.querySelector('.b-1').onclick = () => {
    t1(5, 11);
}

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

let a2 = [7, 6, 5];

function t2(key, val) {
    t1(key, val);
}

document.querySelector('.b-2').onclick = () => {
    t2('a2', a2);
}


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3(key, out) {
    let arr = JSON.parse(localStorage.getItem(key));

    let rez = '';

    arr && Object.entries(arr).forEach(([index, item]) => rez += `${index} ${item}<br>`);

    document.querySelector(out).innerHTML = rez;
}

document.querySelector('.b-3').onclick = () => {
    t3('a2', '.out-3');
}


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

let a4 = { 'hello': 'world', 'hi': 'mahai' };

function t4() {
    t1('a4', a4);
}

document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a24. Выведите в out-4 в формате ключ пробел значение перенос строки. */

function t5() {
    t3('a4', '.out-5');
}

document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    localStorage.clear();
    console.log(localStorage);
}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

let a7 = [];

function t7() {
    const newItem = document.querySelector('.i-7').value;
    var regex = /^[0-9]+$/;
    if (newItem.match(regex)) {
        a7.push(+newItem);
        t1('a7', a7);
    }
    console.log(localStorage);
}

document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    a7.pop();
    t1('a7', a7);
}

document.querySelector('.b-8').onclick = t8;

// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */

function t9() {
    let bg = '';

    document.querySelectorAll('input[name="rb-9"]').forEach(item => {
        if (item.checked) bg = item.value;
    });

    if (bg.length > 0) {
        localStorage.setItem('bg', bg);
        document.getElementsByTagName('fieldset')[0].style.backgroundColor = bg;
    }

}

document.querySelectorAll('input[name="rb-9"]').forEach(item => item.onclick = () => {
    t9()
});

// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

const card = {
    'apple': 3,
    'grape': 2
}
let totalGoods = 0;

function t10() {
    cardLS = JSON.stringify(card);
    localStorage.setItem('card', cardLS);
}

t10();

// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */

function t11() {
    cardLS = JSON.parse(localStorage.getItem('card'));
    
    table = "<table>";
    Object.entries(cardLS).forEach(([key, val]) => {
        table += `<tr><td>${key}</td><td>${val}</td><td><button class="button-primary changeInCart" data-id="${key}" data-action="plus">+</button></td><td><button class="button-primary changeInCart" data-id="${key}" data-action="minus">-</button></td></tr>`;
    });
    table += `<tr><td>Total goods:</td><td>${totalGoods}</td><td></td><td></td></tr>`;
    table += "</table>";

    document.querySelector('.out-10').innerHTML = table;

    document.querySelectorAll('.changeInCart').forEach(function(elem){
        elem.onclick=t12;
    });
}

// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

function t12() {
    //console.table(this.dataset.id,this.dataset.action);

    switch(this.dataset.action){
        case 'plus':
            card[this.dataset.id]++;
            break;
        case 'minus':
            card[this.dataset.id]? card[this.dataset.id]-- : {};
            break;
    }
    t10();
    t13();
    t11();
}

// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */

function t13() {
    cardLS = JSON.parse(localStorage.getItem('card'));
    totalGoods = 0;
    Object.entries(cardLS).forEach(([key, val]) => {
        totalGoods += +val;
    });
}

// Task 14 ============================================
/*  Добавьте функцию t14, которая при загрузке страницы проверяет наличие card в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

function t14() {
    if(localStorage.getItem('card')){
        t10();
        t13();
        t11();
    }
}

t14();
