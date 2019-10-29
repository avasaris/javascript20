/* 
Task 1.     Создайте новый Set. Добавьте в него через add элементы. Выведите в консоль.
*/

let mySet = new Set();

mySet.add('one');
mySet.add('two');
mySet.add('three');
mySet.add('four');

console.log(mySet);

/* 
Task 2.     Создайте input куда пользователь может вводить элементы и кнопку. По нажатию 
            на кнопку значение из input добавляется в set. Set выводится в консоль.
*/

document.querySelector('.b-1').onclick = () => {
    mySet.add(document.querySelector('.u-1').value);
    console.log(mySet);
}

/* 
Task 3.     Добавьте к предыдущему заданию кнопку удалить. При нажатии кнопки читаете 
            содержимое input и удаляете его из Set. Если input пустой - выводите ошибку (alert).
*/

document.querySelector('.b-2').onclick = () => {
    const item = document.querySelector('.u-1').value;

    if (item === "") {
        console.error("Input is empty!");
    } else {
        mySet.delete(item);
    }

    console.log(mySet);
}
