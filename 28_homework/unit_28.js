// Task 1
// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.

let goods = new Goods('Bicycle', 10);

console.log(goods);

//Task 2.
//  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

goods.image = "https://img.icons8.com/officel/80/000000/cycling-track.png";
goods.count = 100;

console.log(goods);

//Task 3.
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).

const out = document.querySelector('.out-3');
goods.draw(out);


// Task 4.
// Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

let goods2 = new Goods('Airplane', 1, "https://img.icons8.com/nolan/96/airplane-take-off.png", 2);
const out2 = document.querySelector('.out-4');
goods2.draw(out2);

//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.

console.dir(Goods2);

// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

let goods3 = new Goods2('Balloon', 15, "https://img.icons8.com/officel/80/000000/party-baloon.png", 100);
const out3 = document.querySelector('.out-6');
goods3.draw(out3);

// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

console.dir(Valid);

//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let auth1 = new Valid('test@test.net', 'qqqww');
console.log('Task 8:', auth1.isValid);

//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let auth2 = new Valid('test@test.net', 'qqqwwee');
console.log('Task 9:', auth2.isValid);

//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), 
// помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError 
// пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.

console.dir(Valid2);

 //Task 11.
 // Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let valid2 = new Valid2('', 'qazwsxedc');
console.log('Task 11: ',valid2);

 //Task 12.
 // Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

 let valid3 = new Valid2('test@test.test', 'qazwsxedc');
console.log('Task 12: ',valid3);