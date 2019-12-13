let
    a1_res = '',
    a2_res = '',
    a7_res = [],
    a8_res,
    a9_res = {},
    a10_res = [],
    a11_res = '',
    a14_res = [],
    a15_res = [],
    a16_res = {},
    a18_res = '',
    a20_res = {}
    ;
// Task 1 ============================================
/* <p> Переберите массив a1 = [5, 7, 9, 11, 13, 15], c помощью цикла for. Выведите на страницу в формате значение+пробел. Результат присвойте переменной a1_res. Действия запускаются при вызове функции t1. </p>  */

function t1() {
    let a1 = [5, 7, 9, 11, 13, 15];
    for (let i = 0; i < a1.length; i++) {
        a1_res += a1[i] + ' ';
    }
    document.querySelector('.out-1').innerHTML = a1_res;
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/*  Переберите массив a2 = [5, 7, 9, 11, 13, 15], c помощью цикла for. Выведите на страницу в виде ключ - значение. Разделитель между ключом и значением - дефис, между строками - br. Результат присвойте переменной a2_res. Действия запускаются при вызове функции t2. */

function t2() {
    let a2 = [5, 7, 9, 11, 13, 15];
    for (let i = 0; i < a2.length; i++) {
        a2_res += i + '-' + a2[i] + "<br>";
    }
    document.querySelector('.out-2').innerHTML = a2_res;
}

document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/* При нажатии кнопки, получите div.u-3 с помощью getElementsByClassName, переберите циклом for, допишите в каждый из div цифру 3 (без пробелов). Действия запускаются при вызове функции t3. */

function t3() {
    let divs = document.getElementsByClassName('u-3');
    for (let i = 0; i < divs.length; i++) divs[i].innerHTML += '3';
}

document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  Получите div.u-3 с помощью querySelectorAll, переберите циклом for, допишите в каждый из div цифру 4 (без пробелов). Действия запускаются при вызове функции t4.
*/

function t4() {
    let divs = document.querySelectorAll('.u-3');
    for (let item of divs) item.innerHTML += '4';
}

document.querySelector('.b-4').onclick = t4;


// Task 5 ============================================
/*  Создайте div с помощью createElement. Получите все div.u-3 с помощью getElementsByClassName в "массив". Попробуйте добавить в "массив" созданный div с помощью метода push. В комментарии к задаче опишите результат.

 Действия должны запускаться при вызове функции t5. */

function t5() {

    // Если раскомментировать код ниже, то получим ошибку, т.к. HTMLCollection не предоставляет метода push

    let divs = document.getElementsByClassName('u-3');
    console.log(divs);

    let myDiv = document.createElement('div');
    myDiv.innerHTML = 'mydiv';

    //divs.push(myDiv);
    console.log(divs);
    document.querySelector('.out-5').innerHTML = JSON.stringify(divs);
}

document.querySelector('.b-5').onclick = t5;


// Task 6 ============================================
/*  Создайте div с помощью createElement. Получите все div.u-3 с помощью querySelectorAll в "массив". Попробуйте добавить в "массив" созданный div с помощью метода push. В комментарии к задаче опишите результат. Действия должны запускаться при вызове функции t6. */

function t6() {

    // Если раскомментировать код ниже, то получим ошибку, т.к. NodeList не предоставляет метода push

    let divs = document.querySelectorAll('.u-3');
    console.log(divs);

    let myDiv = document.createElement('div');
    myDiv.innerHTML = 'mydiv';

    //divs.push(myDiv);
    console.log(divs);
    document.querySelector('.out-6').innerHTML = JSON.stringify(divs);

}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Дан массив a7 = [ [1,2], [3,4], [5,6]], напишите функцию которая делает из него массив [1,2,3,4,5,6]. Используем for. Действия должны запускаться при вызове функции t7. Результат - выведите на страницу и сохраните в массив a7_res. */

function t7() {
    let a7 = [[1, 2], [3, 4], [5, 6]];
    for (let i = 0; i < a7.length; i++) {
        for (let j = 0; j < a7[i].length; j++) {
            a7_res.push(a7[i][j]);
        }
    }
    document.querySelector('.out-7').innerHTML = JSON.stringify(a7_res);
}

document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/* Дан массив a8 = [ [1,2,3], [3,4,9], [5,6]], напишите функцию которая выводит самый большой индекс вложенных массивов. Результат сохраняется в переменную a8_res. Используем for. Действия должны запускаться при вызове функции t8. */

let a8 = [[1, 2, 3], [3, 4, 9], [5, 6]];

function t8(a8) {
    let a8_res = 0;
    for (let i = 0; i < a8.length; i++) {
        let newInd = a8[i].length - 1;
        if (a8_res < newInd) a8_res = newInd;
    }

    document.querySelector('.out-8').innerHTML = a8_res;
}

document.querySelector('.b-8').onclick = function () {
    t8(a8);
}


// Task 9 ============================================
/*  Дан массив a9 = [4, 6, 9, "hello"]. Напишите функцию, которая преобразовывает его в ассоциативный массив вида a9_1={4: 4, 6: 6, 9: 9, hello : "hello"}. Используйте цикл for. Результат сохраняется в переменную a9_res. Используем for. Действия должны запускаться при вызове функции t9.*/

let a9 = [4, 6, 9, "hello"];

function t9(a9) {
    for (let i = 0; i < a9.length; i++) {
        a9_res[a9[i]] = a9[i];
    }

    document.querySelector('.out-9').innerHTML = JSON.stringify(a9_res);
    console.log(a9_res);
}

document.querySelector('.b-9').onclick = function () {
    t9(a9);
}


// Task 10 ============================================
/*  Переберите массив a10 = [5, 7, 9, 11, 13, 15], c помощью цикла for in. Выведите на страницу. Результат сохраняется в переменную a10_res. Действия должны запускаться при вызове функции t10.

 */

let a10 = [5, 7, 9, 11, 13, 15];

function t10(a10) {
    for (let key in a10) a10_res += a10[key] + ' ';

    document.querySelector('.out-10').innerHTML = a10_res;
}

document.querySelector('.b-10').onclick = function () {
    t10(a10);
}


// Task 11 ============================================
/*  Переберите массив a11 = [5, 7, 9, 11, 13, 15], c помощью цикла for in. Выведите на страницу в виде ключ - значение. Разделение между ключем и значением  - дефис (без пробелов) между строками - <br>. Результат (строка) сохраняется в переменную a11_res. Действия должны запускаться при вызове функции t11.
 */

let a11 = [5, 7, 9, 11, 13, 15];

function t11(a11) {
    for (let key in a11) a11_res += `${key}-${a11[key]}<br>`;

    document.querySelector('.out-11').innerHTML = a11_res;
    console.log(a11_res);
}

document.querySelector('.b-11').onclick = function () {
    t11(a11);
}


// Task 12 ============================================!
/*  Напишите функцию, которая выполняет: при нажатии кнопки div.u-12 с помощью getElementsByClassName, переберите циклом for in, допишите в каждый из div число 12 (без пробелов). Если это невозможно - напишите в комментарии. Действия должны запускаться при вызове функции t12.
 */


function t12() {
    let divs12 = document.getElementsByClassName('u-12');
    for (let key in divs12) divs12[key].innerHTML += '12';
}

document.querySelector('.b-12').onclick = t12;

// Task 13 ============================================!
/*  Напишите функцию, которая выполняет: при нажатии кнопки, получите div.u-13 с помощью querySelectorAll, переберите циклом for in, допишите в каждый из div число 13 (без пробелов). Если это невозможно - напишите в комментарии.  Действия должны запускаться при вызове функции t13
 */


function t13() {
    let divs13 = document.querySelectorAll('.u-13');
    for (let key in divs13) divs13[key].innerHTML += '13';
}

document.querySelector('.b-13').onclick = t13;


// Task 14 ============================================
/*  Дан массив a14 = [[1,2], [3,4], [5,6]], напишите функцию которая делает из него массив [1,2,3,4,5,6]. Используем for in.
    Действия должны запускаться при вызове функции t14. Результат операции запишите в a14_res.
 */

let a14 = [[1, 2], [3, 4], [5, 6]];

function t14(a14) {
    for (let key1 in a14) {
        for (let key2 in a14[key1]) {
            a14_res.push(a14[key1][key2]);
        }
    }

    document.querySelector('.out-14').innerHTML = JSON.stringify(a14_res);
}

document.querySelector('.b-14').onclick = function () {
    t14(a14);
}


// Task 15 ============================================!
/*  Дан массив a15 = [ [1,2,3], [3,4,9], [5,6]], напишите функцию которая выводит самый большой индекс вложенных массивов. Используем for in.
    Действия должны запускаться при вызове функции t15. Результат операции запишите в a15_res.
 */

let a15 = [[1, 2, 3], [3, 4, 9], [5, 6]];

function t15(a15) {
    for (let key in a15) {
        let newLength = a15[key].length - 1;
        if (newLength > a15_res) a15_res = newLength;
    }

    document.querySelector('.out-15').innerHTML = a15_res;

}

document.querySelector('.b-15').onclick = function () {
    t15(a15);
}


// Task 16 ============================================
/*  Дан массив a16 = [4, 6, 9, "hello"]. Напишите функцию, которая преобразовывает его в ассоциативный массив вида a16_res={4: 4, 6: 6, 9: 9, hello : "hello"}. Используйте цикл for in.
    Действия должны запускаться при вызове функции t16. Результат операции запишите в a16_res.
 */

let a16 = [4, 6, 9, "hello"];

function t16(a16) {
    for (let key in a16) a16_res[a16[key]] = a16[key];

    document.querySelector('.out-16').innerHTML = JSON.stringify(a16_res);
    console.log(a16_res);
}

document.querySelector('.b-16').onclick = function () {
    t16(a16);
}

// Task 17 ============================================
/*  Переберите массив a17 = [5, 7, 9, 11, 13, 15], c помощью цикла for of. Выведите на страницу в формате елемент+пробел.
    Действия должны запускаться при вызове функции t17.
 */

let a17 = [5, 7, 9, 11, 13, 15];

function t17(a17) {
    let a17_res = '';
    for (let val of a17) a17_res += `${val} `;

    document.querySelector('.out-17').innerHTML = a17_res;
}

document.querySelector('.b-17').onclick = function () {
    t17(a17);
}

// Task 18 ============================================
/*  Переберите массив a18 = [5, 7, 9, 11, 13, 15], c помощью цикла for of.
    Выведите на страницу в виде ключ - значение (разделены дефисом без пробелов). В конце строки - br. Результирующую строку присвойте a18_res;
    Действия должны запускаться при вызове функции t18.
 */

let a18 = [5, 7, 9, 11, 13, 15];

function t18(a18) {
    let key = 0;
    for (let val of a18) {
        a18_res += `${key}-${val}<br>`;
        key++;
    }

    document.querySelector('.out-18').innerHTML = a18_res;
}

document.querySelector('.b-18').onclick = function () { t18(a18) };

// Task 19 ============================================!!!
/*  Напишите функцию, которая выполняет: при нажатии кнопки div.u-19 с помощью getElementsByClassName, переберите циклом for of, допишите в каждый из div цифры 19 (без пробелов). Если это невозможно - напишите в комментарии.
    Действия должны запускаться при вызове функции t19.
 */


function t19() {
    let divs19 = document.getElementsByClassName('u-19');
    for (let item of divs19) item.innerHTML += '19';
}

document.querySelector('.b-19').onclick = t19;

// Task 20 ============================================!!!
/* Дан массив a20 = [4, 6, 9, "hello"]. Напишите функцию, которая преобразовывает его в ассоциативный массив вида a20_res ={4: 4, 6: 6, 9: 9, hello : "hello"}. Используйте цикл for of.
Действия должны запускаться при вызове функции t20.
 */

let a20 = [4, 6, 9, "hello"];

function t20(a20) {
    for (let item of a20) a20_res[item] = item;

    document.querySelector('.out-20').innerHTML = JSON.stringify(a20_res);
    console.log(a20_res);
}

document.querySelector('.b-20').onclick = function () {
    t20(a20);
}
