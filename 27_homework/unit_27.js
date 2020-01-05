
const URL = "http://getpost.itgid.info/index2.php";
const authToken = "auth=zhrgB3DxC8LoG7Gcisjc";

function myPromise(method, aCode, params) {
    return new Promise((resolve, reject) => {
        // lets calculate main parameters
        let getStr = authToken + "&action=" + aCode;

        // lets calculate other parameters
        let paramsGet = [];
        Object.entries(params).forEach(([key, val]) => {
            paramsGet.push(`${key}=${val}`);
        });
        paramsGet = paramsGet.join('&');
        if (paramsGet.length) getStr += "&" + paramsGet;

        // lets run the request
        switch (method) {
            case "GET":
                fetch(URL + "?" + getStr)
                    .then(data => resolve(data.text()))
                break;

            case "POST":
                fetch(URL + "?" + getStr, {
                    method: method,
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded"
                    },
                    body: getStr
                })
                    .then(data => resolve(data.text()))
                break;
        }
    });
}

// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {
    let a = myPromise("GET", 1, {});

    let b = myPromise("GET", 2, { name: 'Arthur' });

    const out = document.querySelector('.out-1');

    Promise.all([a, b]).then(msg => {
        out.innerHTML = JSON.stringify(msg)
    });
}

document.querySelector('.b-1').onclick = t1;


// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
    let a = myPromise("GET", 3, { num1: 44, num2: 77 });

    let b = myPromise("GET", 4, { num1: 44, num2: 77 });

    const out = document.querySelector('.out-2');

    Promise.all([a, b]).then(msg => {
        out.innerHTML = JSON.stringify(msg)
    });
}

document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
    let a = myPromise("GET", 5, {});

    let b = myPromise("GET", 6, { num1: 44, num2: 77 });

    const out = document.querySelector('.out-3');

    Promise.all([a, b]).then(msg => {
        out.innerHTML = JSON.stringify(msg)
    });
}

document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    let a = myPromise("GET", 7, {});

    let b = myPromise("GET", 8, { year: 1978 });

    const out = document.querySelector('.out-4');

    Promise.all([a, b]).then(msg => {
        out.innerHTML = JSON.stringify(msg)
    });
}

document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    let a = myPromise("POST", 1, {});

    let b = myPromise("POST", 2, { name: 'Arthur' });

    const out = document.querySelector('.out-5');

    Promise.all([a, b]).then(msg => {
        out.innerHTML = JSON.stringify(msg)
    });
}

document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    let a = myPromise("POST", 3, { num1: 44, num2: 77 });

    let b = myPromise("POST", 4, { num1: 44, num2: 77 });

    const out = document.querySelector('.out-6');

    Promise.all([a, b]).then(msg => {
        out.innerHTML = JSON.stringify(msg)
    });
}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    let a = myPromise("POST", 5, {});

    let b = myPromise("POST", 6, { num1: 44, num2: 77 });

    const out = document.querySelector('.out-7');

    Promise.all([a, b]).then(msg => {
        out.innerHTML = JSON.stringify(msg)
    });
}

document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
    let a = myPromise("POST", 7, {});

    let b = myPromise("POST", 8, { year: 1978 });

    const out = document.querySelector('.out-8');

    Promise.all([a, b]).then(msg => {
        out.innerHTML = JSON.stringify(msg)
    });
}

document.querySelector('.b-8').onclick = t8;

