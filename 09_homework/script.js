// TASK 1. Напишите функцию func_1, которая присваивает p.u-1 ширину 200px.Проверьте ее работу.Допишите возможность присваивать высоту равную 100px;

function func_1(width = 100, height = 200) {
    const pu1Style = document.querySelector("p.u-1").style;

    pu1Style.background = "lightGray";
    pu1Style.width = `${width}px`;
    pu1Style.height = `${height}px`;
}

func_1();


// TASK 2. Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u-2 класс css-1. Задайте данному классу через CSS зеленый цвет фона.

function func_2() {
    const pu2 = document.querySelector("p.u-2");

    pu2.classList.add("css-1");
}

func_2();

// TASK 3. Используя цикл, добавьте на все блоки p.u-3 событие onclick.По клику запускайте функцию func_3, которая окрашивает элемент, на котором произошло событие в красный цвет фона.Для обращения внутри функции к такому элементу используйте this.

// helper function for task 3, 4, 5, ...
function setOnClickFunction(arr, func) {
    for (let i = 0; i < arr.length; i++) arr[i].onclick = func;
}

// TASK 3

const pu3 = document.querySelectorAll("p.u-3");

setOnClickFunction(pu3, function () { func_3(this); });

function func_3(elem) {
    elem.style.background = "red";
}

// TASK 4. Используя цикл, добавьте на все блоки p.u-4 событие onclick.По клику запускайте функцию func_4, которая присваивает элементу, на котором произошло событие, класс css-2. Для обращения внутри функции к такому элементу используйте this.

const pu4 = document.querySelectorAll("p.u-4");

setOnClickFunction(pu4, function () { func_4(this); });

function func_4(elem) {
    elem.classList.add("css-2");
}

// TASK 5. C помощью цикла, повесьте на блоки p.u-5 функцию func_5, которая при клике будет удалять класс css-3 с элемента, на котором произошло событие.

const pu5 = document.querySelectorAll("p.u-5");

setOnClickFunction(pu5, function () { func_5(this); });

function func_5(elem) {
    elem.classList.remove("css-3");
}

// TASK 6. Есть кнопка.u-6. Напишите функцию, которая при клике делает toggle классу.active для данной кнопки.

const buttons6 = document.querySelectorAll("button.u-6");

setOnClickFunction(buttons6, function () { func_6(this); });

function func_6(elem) {
    elem.classList.toggle("active");
}

// TASK 7. Напишите функцию func_7, которая будучи запущенной возвращает количество элементов с классом css-3.

function func_7() {
    return document.querySelectorAll(".css-3").length;
}

// console.log("Task 7 answer: " + func_7());
document.getElementById("out-7").innerHTML = func_7();


// TASK 8. Напишите функцию func_8, которая будучи запущенной, присваивает всем элементам p.u-1 атрибут title со значением test-data.

function func_8() {
    const pu1 = document.querySelectorAll("p.u-1");
    for (let i = 0; i < pu1.length; i++) pu1[i].setAttribute("data-title", "test-data");
}

func_8();

// TASK 9. С помощью цикла получите кнопки.u-9. Добавьте на них событие onclick которое запускает функцию func_9. Функция возращает data атрибут элемента, по которому кликнули.

const buttons9 = document.querySelectorAll("button.u-9");

setOnClickFunction(buttons9, function () { console.log(func_9(this)); });

function func_9(elem) {
    return elem.getAttribute("data");
}

// TASK 10. Напишите функцию func_10, которая при клике на кнопке.u-10__button читает атрибут валюты data-currency и на основании этого выводит в p.u-10__out коэффициент данной валюты по отношению к доллару.Коэффициент возьмите приблизительно из интернета.Считается, что пользователь всегда вводит валюту в долларах.
function currencyFromUSD(value) {
    switch (value) {
        case "euro":
            return 0.97;
            break;
        case "usd":
            return 1;
            break;
        case "rub":
            return 64.23;
            break;
        default:
            return 0;
    }
}

// TASK 10.

const buttons10 = document.querySelectorAll("button.u-10__button");

setOnClickFunction(buttons10, function () { func_10(this); });

function func_10(elem) {
    let value = elem.getAttribute("data-currency");
    document.querySelector("p.u-10__out").innerHTML = currencyFromUSD(value);
}

// TASK 11. Напишите функцию func_11, которая при клике на кнопке.u-11__button читает атрибут валюты data-currency и на основании этого выводит в p.u-11__out перевод валюты введенной пользователем в input.u-11__input в указанную валюту.Считается, что пользователь всегда вводит валюту в долларах. 

const buttons11 = document.querySelectorAll("button.u-11__button");

setOnClickFunction(buttons11, function () { func_11(this); });

function func_11(elem) {
    let amount = +document.querySelector("input.u-11__input").value;
    let value = elem.getAttribute("data-currency");
    document.querySelector("p.u-11__out").innerHTML = amount * currencyFromUSD(value);
}

// TASK 12. Создайте функцию func_12, которая создает через createElement элемент div, присваивает ему класс css-4 и возвращает данный элемент

function func_12() {
    const div12 = document.createElement("div");
    div12.classList.add("css-4");
    return div12;
}

console.log("<<< TASK 12. >>>");
console.log(func_12());

// TASK 13. Создайте функцию func_13, которая создает элемент span.span-13 с текстом 13 через createElement и вставляет его в p.u-13(append).
function createElement(type, cls, html) {
    const elem = document.createElement(type);
    if (cls) elem.setAttribute("class", cls);
    elem.innerHTML = html;

    return elem;
}

// TASK 13.

function func_13() {
    const span13 = createElement("span", "span-13", 13);

    const pu13 = document.querySelector("p.u-13");
    pu13.append(span13);
    return pu13;
}

console.log("<<< TASK 13. >>>");
console.log(func_13());

// TASK 14. Создайте функцию func_14, которая создает элемент span.span-14 с текстом 14 через createElement и вставляет его в p.u-14(prepend).

function func_14() {
    const span14 = createElement("span", "span-14", 14);

    const pu14 = document.querySelector("p.u-14");
    pu14.prepend(span14);
    return pu14;
}

console.log("<<< TASK 14. >>>");
console.log(func_14());

// TASK 15. Создайте функцию func_15, которая создает элемент span.span-15 с текстом 15 через createElement и вставляет его в p.u-15(before)

function func_15() {
    const span15 = createElement("span", "span-15", 15);

    const pu15 = document.querySelector("p.u-15");
    pu15.before(span15);
    return pu15;
}

console.log("<<< TASK 15. >>>");
console.log(func_15().parentElement);

// TASK 16. Создайте функцию funct-16, которая создает элемент button.u-16 c текстом Push.Повесьте на данный элемент событие onclick со стрелочной функцией, которая в консоль выводит текст u-16. И после добавления события добавьте данный элемент на страницу в div.u-16__out.Проверьте работоспособность события.

function func_16() {
    const b16 = document.createElement("button");
    b16.innerHTML = "Push";
    b16.onclick = () => {
        console.log("u-16");
    }
    return b16;
}

document.querySelector("div.u-16__out").append(func_16());

// TASK 17. Создайте функцию, funct-17, которая при запуске создаст элемент p c текстом 17 и заменит этим элементом div.u-17

function func_17() {
    const p17 = createElement("p", "", 17);

    const div17 = document.querySelector("div.u-17");
    div17.replaceWith(p17);
}

func_17();

// TASK 18. C помощью цикла повесьте на div.out-18 функцию func_18. Данная функция дожна удалять элемент, на котором произошел клик из DOM.Функция должна возвращать удаленный элемент

const divs18 = document.querySelectorAll("div.out-18");

setOnClickFunction(divs18, function () { console.log(func_18(this)); });

function func_18(elem) {
    elem.remove();
    return elem;
}

// TASK 19. Создайте функцию func_19, которая принимает параметр текст.Создает элемент li, вставляет в него указанный текст, и добавляет на страницу в ul.u-19 в конец списка.

function func_19(liText) {
    const li = createElement("li", "", liText);

    const ul19 = document.querySelector("ul.u-19");
    ul19.append(li);
}

func_19("Test19");

// TASK 20. Доработайте предыдущее задание.Допишите функцию func_20 которая может принимать текст от пользователя и вставлять в список ul.u-20. Также добавьте checkbox - важное, при этом созданный li получает класс.css-5.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementById("b-20").onclick = () => { func_20(); };

function func_20() {
    const liText = document.getElementById("inp-20").value;

    const li = document.createElement("li");
    li.classList.add("css-5");
    const randId=getRandomInt(100000,1000000);
    li.innerHTML = `<input type="checkbox" id="${randId}" value="${liText}"><label for="${randId}">${liText}</label>`;

    const ul20 = document.querySelector("ul.u-20");
    ul20.append(li);
}


