/* eslint-disable no-loop-func */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

function printObj(obj, selector) {
    let out = '{\n';

    // eslint-disable-next-line guard-for-in
    for (const key in obj) {
        out += `    ${key} : ${obj[key]}\n`;
    }
    out += `}`;

    document.querySelector(selector).innerHTML = `<pre>${out}</pre>`;
}

// function getRandomInt(min, max) {
//     const newMin = Math.ceil(min);
//     const newMax = Math.floor(max);
//     return Math.floor(Math.random() * (newMax - newMin)) + newMin;
// }

/* 
Task 1.     Выведите массив a1 на страницу.
*/

const a1 = {
    3: 'hello',
    one: 'hi',
};

printObj(a1, 'div.out-1');

/* 
Task 2.     Выведите на страницу элементы из масиива a2 у которых символов больше 4.
*/

const a2 = {
    3: 'hello',
    one: 'hi',
    testt: 'vodoley',
    ivan: 'ivanov',
};

let t2Out = `{\n`;
for (const key in a2)
    if (typeof a2[key] === 'string')
        if (a2[key].length > 4) t2Out += `    ${key} : ${a2[key]}\n`;
t2Out += `}`;

document.querySelector('div.out-2').innerHTML = `<pre>${t2Out}</pre>`;

/* 
Task 3.     Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.
*/

const a3 = {
    3: 'hello',
    one: 'hi',
    testt: 'vodoley',
    ivan: 'ivanov',
};

let t3Out = `{\n`;
for (const key in a3)
    if (typeof key === 'string')
        if (key.length > 4) t3Out += `    ${key} : ${a3[key]}\n`;
t3Out += `}`;

document.querySelector('div.out-3').innerHTML = `<pre>${t3Out}</pre>`;

/* 
Task 4.     Выведите на страницу элементы из масиива a4 у которых значение - число.
*/

const a4 = {
    3: 'hello',
    one: 4,
    testt: 'vodoley',
    ivan: 6,
};

let t4Out = `{\n`;
for (const key in a4)
    if (typeof a4[key] === 'number') t4Out += `    ${key} : ${a4[key]}\n`;
t4Out += `}`;

document.querySelector('div.out-4').innerHTML = `<pre>${t4Out}</pre>`;

/* 
Task 5.     Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.
*/

const a5 = {
    a: 7,
    z: 4,
    45: 12,
    f: 6,
};

let t5Out = 0;
for (const key in a5) if (typeof a5[key] === 'number') t5Out += a5[key];

document.querySelector('div.out-5').innerHTML = t5Out;

/* 
Task 6.     Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height
            и значения любого персонажа. Выведите массив на страницу.
*/

const a6 = {
    name: 'Vasya',
    age: 42,
    gender: 'male',
    height: 170,
    nation: 'The Russians',
};

printObj(a6, 'div.out-6');

/* 
Task 7.     Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input)
            и кнопку. При нажатии кнопки добавляйте в массив новое значение с соответствующим
            ключем. Выводите массив на страницу.
*/

const a7 = {};

document.querySelector('button.b-7').onclick = () => {
    const key = document.querySelector('.u7-key__input').value;
    const value = document.querySelector('.u7-value__input').value;

    a7[key] = value;

    printObj(a7, 'div.out-7');
};

/* 
Task 8.     Добавьте к предыдущей задачи input.u8-key__input и кнопку. При нажатии кнопки - удаляйте 
            значение с соответствующим ключем. Выводите массив на страницу.
*/

document.querySelector('button.b-8').onclick = () => {
    const key = document.querySelector('.u8-key__input').value;

    delete a7[key];

    printObj(a7, 'div.out-7');
};

/* 
Task 9.     Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. При нажатии 
            кнопки - удаляйте записи с соответствующим значением. Выводите массив на страницу.
*/

document.querySelector('button.b-9').onclick = () => {
    const value9 = document.querySelector('.u9-delete-value__input').value;

    for (const key in a7) if (a7[key] === value9) delete a7[key];

    printObj(a7, 'div.out-7');
};

/* 
Task 10.    Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии
            кнопки - возвращайте true если такой ключ есть в массиве, и false если нет.
*/

document.querySelector('button.b-10').onclick = () => {
    const key10 = document.querySelector('.u10-has-key__input').value;

    const keyExist = key10 in a7;

    document.querySelector('.out-10').innerHTML = keyExist;
};

/* 
Task 11.    Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.
*/

const metroS = {
    'Святошинско-Броварская': [
        'Академгородок',
        'Арсенальная',
        'Берестейская',
        'Вокзальная',
        'Гидропарк',
        'Дарница',
        'Днепр',
        'Житомирская',
        'Левобережная',
        'Лесная',
        'Майдан Незалежности',
        'Нивки',
        'Политехнический институт',
        'Святошин',
        'Театральная',
        'Университет',
        'Черниговская',
        'Шулявская',
    ],
    'Сырецко-Печерская': [
        'Бориспольская',
        'Выдубичи',
        'Вырлица',
        'Дворец спорта',
        'Дорогожичи',
        'Дружбы Народов',
        'Золотые ворота',
        'Кловская',
        'Красный хутор',
        'Лукьяновская',
        'Осокорки',
        'Печерская',
        'Позняки',
        'Славутич',
        'Сырец',
        'Харьковская',
    ],
    'Куренёвско-Красноармейская': [
        'Васильковская',
        'Выставочный центр',
        'Героев Днепра',
        'Голосеевская',
        'Дворец Украина',
        'Демеевская',
        'Иподром',
        'Контрактовая площадь',
        'Крещатик',
        'Лыбедская',
        'Минская',
        'Оболонь',
        'Олимпийская',
        'Площадь Льва Толстого',
        'Почайна',
        'Почтовая площадь',
        'Тараса Шевченко',
        'Теремки',
    ],
};

document.querySelector('.out-11').innerHTML = `<pre>${JSON.stringify(
    metroS,
    null,
    ' '
)}</pre>`;

/* 
Task 12.    Добавьте к предыдущей задаче select.u12-branch и кнопку. Пользователь может 
            выбрать цвет ветки и нажать кнопку, после чего на страницу будут выведены только
            станции данной ветки.
*/

let lines = '';

for (const line in metroS) lines += `<option>${line}</option>`;

const selector12 = document.querySelector('.u12-branch');
selector12.innerHTML = lines;

document.querySelector('.b-12').onclick = () => {
    const choise = selector12.options[selector12.selectedIndex].text;

    document.querySelector('.out-12').innerHTML = metroS[choise].toString();
};

/* 
Task 13.    Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит
            станции ветки в обратном порядке. Внимание! Все подобные задачи не меняют массив, 
            а меняют только вывод!!!
*/

document.querySelector('.b-13').onclick = () => {
    const choise = selector12.options[selector12.selectedIndex].text;

    document.querySelector('.out-12').innerHTML = metroS[choise]
        .reverse()
        .toString();
};

/* 
Task 14.    Добавьте к предыдущей задаче select.u14-find-station и кнопку. В select - пользователь
            может выбрать станцию, а вы перебирая массив - вывести ветку на которой эта станция находится.
*/

function getStationLine(choise, metros) {
    let retLine = '';

    for (const line in metros)
        metros[line].forEach(item => {
            if (choise === item) retLine = line;
        });

    return retLine;
}

// Task 14.

let stationS = '';

for (const line in metroS)
    metroS[line].forEach(station => {
        stationS += `<option>${station}</option>`;
    });

const selector14 = document.querySelector('.u14-find-station');
selector14.innerHTML = stationS;

document.querySelector('.b-14').onclick = () => {
    const choise = selector14.options[selector14.selectedIndex].text;

    document.querySelector('.out-14').innerHTML = getStationLine(
        choise,
        metroS
    );
};

/* 
Task 15.    Добавьте к предыдущей задаче select.u14-find-station и кнопку. В select - пользователь
            может выбрать станцию, а вы перебирая массив - вывести ветку на которой эта станция находится.
*/

function getStationPosition(choise, metros, line) {
    let retPos = 0;

    metros[line].forEach((item, index) => {
        if (choise === item) retPos = index;
    });

    return retPos;
}

// Task 15.

const selector15First = document.querySelector('.u15-first-station');
selector15First.innerHTML = stationS;

const selector15Second = document.querySelector('.u15-second-station');
selector15Second.innerHTML = stationS;

document.querySelector('.b-15').onclick = () => {
    const firstChoise =
        selector15First.options[selector15First.selectedIndex].text;
    const secondChoise =
        selector15Second.options[selector15Second.selectedIndex].text;

    const line1 = getStationLine(firstChoise, metroS);
    const line2 = getStationLine(secondChoise, metroS);

    let answer = '';

    if (line1 === line2) {
        const p1 = getStationPosition(firstChoise, metroS, line1);
        const p2 = getStationPosition(secondChoise, metroS, line2);
        if (Math.abs(p1 - p2) > 0) {
            answer = Math.abs(p1 - p2) - 1;
        } else {
            answer = 'Stations are same.';
        }
    } else {
        answer = 'Stations not on the same line.';
    }

    document.querySelector('.out-15').innerHTML = answer;
};

/* 
Task 16.    Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue
             - в соотвтествии с цветом веток метро. Добавьте пустой select.u16-select. 
            При выборе radio - программа должна в select добавлять option с названиями станций метро. 
            Т.е. выбрали radio(value="green") то внутрь select должны быть записаны option со 
            станциями зеленой ветки. Выбрали red - select должен быть очищен и добавлены option 
            со станциями красной ветки.
*/

document.querySelectorAll('.u16-radio').forEach((item) => {
    item.onclick = () => {
        const choise = document.querySelector('.u16-radio:checked').value;

        let options = '';
        metroS[choise].forEach(item => options += `<option>${item}</option>`);

        document.querySelector('.u16-select').innerHTML = options;
    };
});

/* 
Task 17.    Создайте массив, который описывает метро киевского метрополитена и обозначаются 
            конечные и станции перехода, выведите его на страницу. Конечные - обозначать 0, перехода - 1.
*/

