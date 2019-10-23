function printArray(arr, selector) {
  let out = "";
  if (arr && arr.length) out = JSON.stringify(arr);

  document.querySelector(selector).innerHTML = out;
}

/* 
Task 1.     Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. При нажатии кнопки, 
            функция читает содержимое input и добавляет содержимое в массив, после чего выводит 
            содержимое массива в div.out-1.
*/

const arr1 = [];

document.querySelector("button.u-2__push").onclick = () => {
  const inp1 = document.querySelector("input.u-1").value;

  if (inp1 === "") return;

  arr1.push(inp1);

  printArray(arr1, "div.out-1");
};

/*
Task 2.     Добавьте к предыдущему заданию кнопку button.u-2__pop, при нажатии которой, к массиву arr1
            применяется метод pop, после чего массив выводится в div.out-1
*/

document.querySelector("button.u-2__pop").onclick = () => {
  arr1.pop();

  printArray(arr1, "div.out-1");
};

/*
Task 3.     Добавьте к заданию 1 кнопку button.u-3__shift, которая применяет к массиву arr1
            метод shift (читать про метод shift). После применения shift, массив arr1 выводится в div.out-1.
*/

document.querySelector("button.u-3__shift").onclick = () => {
  arr1.shift();

  printArray(arr1, "div.out-1");
};

/*
Task 4.     Добавьте к заданию 1 кнопку button.u-4__unshift, которая применяет к массиву arr1 метод unshift (
            читать про метод unshift). После применения unshift, массив arr1 выподится в div.out-1. Надеюсь, вы
            догадаетесь проверять input на пустоту перед применением unshift. Надеюсь, вы это сделали и в первой задаче?
*/

document.querySelector("button.u-4__unshift").onclick = () => {
  const inp4 = document.querySelector("input.u-4").value;

  if (inp4 === "") return;

  arr1.unshift(inp4);

  printArray(arr1, "div.out-1");
};

/*
Task 5.     Обьявите массив arr5, добате два элемента input, в первый пользователь может ввести индекс элемента, 
            во второй - количество. Добавьте кнопку, по нажатию на которую к массиву arr5 применяется метод splice. 
            Результат применения выводите в div.out-5.
            let arr5 = [3,14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
*/

const arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, "hello"];

printArray(arr5, "div.out-5");

document.querySelector("button.u-5__splice").onclick = () => {
  const ind5 = document.querySelector("input.u-5-index").value;
  const cnt5 = document.querySelector("input.u-5-count").value;

  if (ind5 === "" || cnt5 === "") return;

  arr5.splice(ind5, cnt5);

  printArray(arr5, "div.out-5");
};
