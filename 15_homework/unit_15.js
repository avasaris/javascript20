let a2_res = new Set();

let a8_res = [],
    a9_res = [],
    a10_res = {},
    a11_res = [],
    a12_res = [],
    a15_res = [],
    a16_res = {},
    a18_res = {};

let s20_res = new Set();
let s21_res = new Set();

// Task 1 ============================================
/* Создайте новый Set. Добавьте в него через add элементы. Выведите в консоль.  */

function t1() {
    let a1 = new Set();
    a1.add(13);
    a1.add(16);
    a1.add('hello');
    a1.add(['haha', 'hoho', 'huhu']);
    a1.add({ console, window });
    a1.add(a1);
    console.log(a1);
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/*  Создайте input куда пользователь может вводить элементы и кнопку. По нажатию на кнопку значение из input добавляется в set. Set выводится в консоль. Результат присвойте переменной a2_res. Действия запускаются при вызове функции t2. */

function t2(elem) {
    a2_res.add(elem);
    console.log(a2_res);
}

document.querySelector('.b-2').onclick = function () {
    t2(document.querySelector('.i-2').value);
}


// Task 3 ============================================
/* Добавьте к предыдущему заданию кнопку удалить. При нажатии кнопки читаете содержимое input и удаляете его из Set. Если input пустой - выводите ошибку(alert). */

function t3(elem) {
    if (!elem) {
        console.error('elem contain bad value');
    } else {
        a2_res.delete(elem);
        console.log(a2_res);
    }

}

document.querySelector('.b-3').onclick = function () {
    t3(document.querySelector('.i-3').value);
}


// Task 4 ============================================
/*  Добавьте к предыдущему заданию кнопку проверить. При нажатии кнопки читаете содержимое input и проверяет его наличие в Set. Функция должна возвращать true или false.Действия запускаются при вызове функции t4. 
*/

function t4(elem) {
    if (!elem) {
        console.error('elem contain bad value');
        return false;
    } else {
        return a2_res.has(elem);
    }
}

document.querySelector('.b-4').onclick = function () {
    let res = t4(document.querySelector('.i-4').value);
    console.log(res);
}



// Task 5 ============================================
/*  Выведите размер полученного в результате предыдущих операций Set. Выводить на страницу и возвращать в функции.
 Действия должны запускаться при вызове функции t5. */

function t5(a2_res) {
    return a2_res.size;
}

document.querySelector('.b-5').onclick = () => {
    let size = t5(a2_res);
    console.log('Size = ', size);
}


// Task 6 ============================================
/* Есть массив  a6 = [3,4,3,2,4,56,1,23]. Напишите функцию, которая возвращает и выводит на страницу количество уникальных элементов в массиве a6. Решение должно использовать set.
Действия должны запускаться при вызове функции t6. */

let a6 = [3, 4, 3, 2, 4, 56, 1, 23];

function t6(a6) {
    let tempSet = new Set();
    a6.map(x => tempSet.add(x));
    return tempSet.size;
}

document.querySelector('.b-6').onclick = function () {
    let uniqueElems = t6(a6);
    console.log('Unique elems = ', uniqueElems);
}


// Task 7 ============================================
/*  Создайте input куда пользователь может ввести пароль и кнопку - проверить. Проверяйте с помощью Set, чтобы пользователь использовал в пароле только не повторяющиеся символы. Логика решения - получаем строку из input - и преобразуем ее в массив (arr.split('')). Считаем длину массива. На основе массива создаем  Set. Сравниваем размеры массива и Set. Функция должна возвращать true или false. Запуск - по нажатию кнопки b-7. */

function t7(login, pass) {
    let passArr = pass.split('');
    return passArr.length === t6(passArr);

}

document.querySelector('.b-7').onclick = function () {
    let login = document.querySelector('.login').value;
    let pass = document.querySelector('.pass').value;
    let res = t7(login, pass);
    console.log(res);
}

// Task 8 ============================================
/* Создайте набор set a8. Напишите функцию, которая принимает set в качестве параметра и четные элементы из набора добавляет в массив a8_res. После завершения операции - выводит a8_res на страницу. Запуск - по нажатию кнопки b-8. */

let a8 = new Set();
a8.add('1')
    .add('2')
    .add('three')
    .add('IV');

function t8(a8) {
    let ind = 1;
    a8.forEach(x => ind++ % 2 == 0 && a8_res.push(x));
}

document.querySelector('.b-8').onclick = function () {
    t8(a8);
    document.querySelector('.out-8').innerHTML = JSON.stringify(a8_res);
}


// Task 9 ============================================
/*  Создайте набор set a9. Напишите функцию, которая принимает set в качестве параметра присваивает a9_res так, что порядок элементов в a9_res обратный a9. Выведите a9_res на страницу. Действия должны запускаться при вызове функции t9.*/

let a9 = new Set();
a9.add('1')
    .add('2')
    .add('three')
    .add('IV');

function t9(a9) {
    a9.forEach(x => a9_res.unshift(x));
}

document.querySelector('.b-9').onclick = function () {
    t9(a9);
    document.querySelector('.out-9').innerHTML = JSON.stringify(a9_res);
}


// Task 10 ============================================
/*  Сложная задача!!! Самая сложная задача за урок. Если ее решите - то массивов вы больше не испугаетесь. Задачу Можно пропустить. Создайте массив элементов a10. Посчитайте, сколько раз встречается каждый из элементов в массиве. Результат присвойте массиву a10_res.
Логика решения: создайте на основе массива - набор. Потом запустите перебор набора и внутри цикла перебора запустите еще один цикл - перебираете массив и смотрите совпадения если элемент массива совпадает с элементом набора - то плюсуете счетчик. После прохода внутреннего цикла добавляете в a20_res запись в виде элемент набора - счетчик.
a10_res = {
    "3" : 5,
    "1" : 1,
}
 */

let a10 = [5, 7, 9, 11, 13, 15, 5, 7, 5, 2, 3, 7, 13];

function t10(a10) {
    let tempSet = new Set();
    a10.map(x => tempSet.add(x));

    for (let item of tempSet.values()) {
        let cnt = 0;
        for (let i = 0; i < a10.length; ++i) a10[i] == item && cnt++;
        a10_res[item] = cnt;
    }


    console.log(a10_res);
}

document.querySelector('.b-10').onclick = function () {
    t10(a10);
}


// Task 11 ============================================
/*  Эмулируем работу set. Пользователь может ввести значение в i-11. Напишите функцию, которая по нажатию b-11 запускает функцию t11. Функция получает введенное значение и добавляет его в массив a11_res. Добавление происхдит если такого значения в массиве нет. После каждой операции выводите a11_res на страницу.
 */


function t11(a11) {
    let tempSet = new Set();
    a11_res.map(x => tempSet.add(x));

    if (!tempSet.has(a11)) a11_res.push(a11);

}

document.querySelector('.b-11').onclick = function () {
    t11(document.querySelector('.i-11').value);
    document.querySelector('.out-11').innerHTML = JSON.stringify(a11_res);
}


// Task 12 ============================================!
/*  Напишите функцию, которая принимает в качестве параметра набор set и преобразует его в массив, результат выводит на страницу и присваивает a12_res. Действия должны запускаться при вызове функции t12.
 */

let a12 = new Set([1, 7, 3, 4, 6, 77, 88, "one"]);

function t12(a12) {
    a12_res = Array.from(a12);
}

document.querySelector('.b-12').onclick = () => {
    t12(a12);
    document.querySelector('.out-12').innerHTML = JSON.stringify(a12_res);
}

// Task 13 ============================================!
/*  
    Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр.
    Действия должны запускаться при вызове функции t13.
 */

let set13 = new Set(['aa', 'ee', 'gg', 'ff']);
let elem13 = document.querySelector('.out-13');

function t13(set13, elem13) {
    elem13.innerHTML = JSON.stringify(Array.from(set13));

}

document.querySelector('.b-13').onclick = () => {
    t13(set13, elem13);
}


// Task 14 ============================================
/*  
    Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр. Третий параметр - разделитель. 
        Действия должны запускаться при вызове функции t14.
        Т.е. ввели в качестве разделителя дефис и вывод на страницу 1-2-3- (без пробелов).
 */

let set14 = new Set(['aa', 'ee', 'gg', 'ff', 5, 8]);
let elem14 = document.querySelector('.out-14');
let sep14 = '-';

function t14(set14, elem14, sep14) {
    let tmpOut = '';
    set14.forEach(x => tmpOut += x + sep14);
    elem14.innerHTML = tmpOut;
}

document.querySelector('.b-14').onclick = () => {
    t14(set14, elem14, sep14);
}

// Task 15 ============================================!
/*  
Дан массив a15. Добавьте вложенные в него массивы  в набор. Изучите результат. Результирующий набор выведите на страницу. Добавление сделайте через цикл. 
    Действия должны запускаться при вызове функции t15. Результат операции запишите в a15_res.
 */

let a15 = [
    [1, 0],
    [1, 0],
    [2, 0]
];

function t15(a15) {
    let tmpSet = new Set(a15);
    console.log(tmpSet);

    let tmpSet2 = new Set();
    for (let val of a15) tmpSet2.add(val);
    console.log(tmpSet2);

}

document.querySelector('.b-15').onclick = function () {
    t15(a15);
}


// Task 16 ============================================
/* 
Дан массив a16 = [
    { Ivan: 1 },
    { Ivan: 1 },
    { Ivan: 2 },
    { Serg: 0 }
]. Добавьте вложенные в него массивы  в набор. Изучите результат. Результирующий набор  выведите в консоль. Добавление сделайте через цикл. 
    Действия должны запускаться при вызове функции t15. 
    Результат операции запишите в a16_res.
 */

let a16 = [
    { Ivan: 1 },
    { Ivan: 1 },
    { Ivan: 2 },
    { Serg: 0 }
];

function t16(a16) {
    let tmpSet = new Set(a16);
    console.log(tmpSet);

    let tmpSet2 = new Set();
    for (let val of a16) tmpSet2.add(val);
    console.log(tmpSet2);
}

document.querySelector('.b-16').onclick = function () {
    t16(a16);
}

// Task 17 ============================================
/*  Дана строка u17 = 'Primer'. Создайте новый набор с Set(u17). Выведите в консоль. Изучите результат.
    Действия должны запускаться при вызове функции t17.
 */


function t17() {
    let u17 = 'Primer';
    console.log(new Set(u17));
}

document.querySelector('.b-17').onclick = t17;

// Task 18 ============================================
/*  
    Очень сложное! Можно пропустить без последствий! Напишите функцию, которая принимает строку и считает сколько раз встречается та либо инная буква. Результат в виде ассоциативного массива присваивает в переменуню a18_res. Данную функцию можно использовать для анализа текста.
    Действия должны запускаться при вызове функции t18.
 */

let a18 = 'Hello';

function t18(a18) {
    let tmpArr = a18.split('');
    t10(tmpArr);
}

document.querySelector('.b-18').onclick = function () { t18(a18) };

// Task 19 ============================================!!!
/*  Создайте набор a19 и добавьте в него значения. Выведите на страницу каждый второй по счету элемент набора.
    Действия должны запускаться при вызове функции t19.
 */

let a19 = new Set();
a19.add('1')
    .add(2)
    .add('three')
    .add('IV')
    .add('FIVE')
    .add("6");

function t19(a19, arr) {
    let ind = 1;
    a19.forEach(x => ind++ % 2 == 0 && arr.push(x));
}

document.querySelector('.b-19').onclick = function () {
    let tmpArr = new Array();
    t19(a19, tmpArr);
    document.querySelector('.out-19').innerHTML = JSON.stringify(tmpArr);
}


// Task 20 ============================================!!!
/* Создайте функцию, которая принимает массив и четные по индексу элементы добавляет в набор s20_res в нечетные в набор s21_res. Выводите данные наборы в консоль.
 */

function t20(a20) {
    let ind = 1;
    a20.forEach(x => {
        if (ind % 2 == 0) {
            s20_res.add(x);
        } else {
            s21_res.add(x);
        }
        ind++;
    });
    console.log(s20_res);
    console.log(s21_res);
}

document.querySelector('.b-20').onclick = function () {
    let arr20 = ['1', 2, 3, '4', 55, 66, '77', 88];
    t20(arr20);
}
