// task 1 --------------------

const button = document.querySelector("button");
const ir1 = document.querySelectorAll('input[type="radio"]');
const iii = document.querySelectorAll('input[type="text"]');


button.onclick = () => {
    let choose = undefined;

    for (let i = 0; i < ir1.length; ++i) {
        if (ir1[i].checked) choose = ir1[i].parentElement.innerText;
    }

    console.log(choose);
    console.log(ir1.checked);

    for (let i = 0; i < iii.length; ++i) {
        iii[i].placeholder = 'Enter data';
    }

}

function inpFunc() {
    for (let i = 0; i < ir1.length; ++i) {
        if (ir1[i].checked) console.log(ir1[i].parentElement.innerText);
    }
}

for (let i = 0; i < ir1.length; ++i) {
    ir1[i].oninput = inpFunc;
}