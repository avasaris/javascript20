// task 1 --------------------

const out1 = document.querySelector('.task-1-out#rez-1');
const button1 = document.querySelector("button.task-1");
let rez1 = "   ";

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        rez1 += "*";
    }
    rez1 += " ";
}

rez1 = rez1.trimEnd();

button1.onclick = () => {
    if (out1.innerHTML) {
        out1.innerHTML = "";
        button1.innerHTML = "Run";
    } else {
        out1.innerHTML = rez1;
        button1.innerHTML = "Clear";
    }
}

// task 2 --------------------

const out2 = document.querySelector(".task-2-out#rez-2");
const button2 = document.querySelector("button.task-2");
let rez2 = "";

for (let i = 0; i < 3; i++) {
    rez2 += "   ";
    for (j = 0; j < 5; j++) {
        rez2 += "*";
    }
    rez2 += `\n`;
}

rez2 = rez2.trimEnd();

button2.onclick = () => {
    if (out2.innerHTML) {
        out2.innerHTML = "";
        button2.innerHTML = "Run";
    } else {
        out2.innerHTML = rez2;
        button2.innerHTML = "Clear";
    }
}

// task 3 --------------------

const out3 = document.querySelector(".task-3-out#rez-3");
const button3 = document.querySelector("button.task-3");
let rez3 = "";

for (let i = 0; i < 3; i++) {
    rez3 += "   ";
    for (j = 0; j < 6; j++) {
        rez3 += 1 - (j % 2);
    }
    rez3 += `\n`;
}

rez3 = rez3.trimEnd();

button3.onclick = () => {
    if (out3.innerHTML) {
        out3.innerHTML = "";
        button3.innerHTML = "Run";
    } else {
        out3.innerHTML = rez3;
        button3.innerHTML = "Clear";
    }
}

// task 4 --------------------

const out4 = document.querySelector(".task-4-out#rez-4");
const button4 = document.querySelector("button.task-4");
let rez4 = "";

for (let i = 0; i < 3; i++) {
    rez4 += "   ";
    for (j = 0; j < 6; j++) {
        if ((j + 1) % 3 == 0) {
            rez4 += 'x';
        } else {
            rez4 += 1 - (j % 2);
        }
    }
    rez4 += `\n`;
}

rez4 = rez4.trimEnd();

button4.onclick = () => {
    if (out4.innerHTML) {
        out4.innerHTML = "";
        button4.innerHTML = "Run";
    } else {
        out4.innerHTML = rez4;
        button4.innerHTML = "Clear";
    }
}

// task 5 --------------------

const out5 = document.querySelector(".task-5-out#rez-5");
const button5 = document.querySelector("button.task-5");
let rez5 = "";

for (let i = 0; i < 3; i++) {
    rez5 += "   ";
    for (j = 0; j <= i; j++) {
        rez5 += '*';
    }
    rez5 += `\n`;
}

rez5 = rez5.trimEnd();

button5.onclick = () => {
    if (out5.innerHTML) {
        out5.innerHTML = "";
        button5.innerHTML = "Run";
    } else {
        out5.innerHTML = rez5;
        button5.innerHTML = "Clear";
    }
}

// task 6 --------------------

const out6 = document.querySelector(".task-6-out#rez-6");
const button6 = document.querySelector("button.task-6");
let rez6 = "";

for (let i = 5; i > 0; i--) {
    rez6 += "   ";
    for (j = i; j > 0; j--) {
        rez6 += '*';
    }
    rez6 += `\n`;
}

rez6 = rez6.trimEnd();

button6.onclick = () => {
    if (out6.innerHTML) {
        out6.innerHTML = "";
        button6.innerHTML = "Run";
    } else {
        out6.innerHTML = rez6;
        button6.innerHTML = "Clear";
    }
}

// task 7 --------------------

const out7 = document.querySelector(".task-7-out#rez-7");
const button7 = document.querySelector("button.task-7");
let rez7 = "";

for (let i = 3; i > 0; i--) {
    for (let j = 0; j < (i + 2); j++) rez7 += " ";
    for (let j = 0; j < 6; j++) rez7 += "*";
    for (let j = i; j < 5; j++) rez7 += " ";
    rez7 += `\n`;
}

rez7 = rez7.trimEnd();

button7.onclick = () => {
    if (out7.innerHTML) {
        out7.innerHTML = "";
        button7.innerHTML = "Run";
    } else {
        out7.innerHTML = rez7;
        button7.innerHTML = "Clear";
    }
}

// task 8 --------------------

const out8 = document.querySelector(".task-8-out#rez-8");
const button8 = document.querySelector("button.task-8");
let rez8 = "";

for (let i = 0; i < 3; i++) {
    rez8 += "   ";
    for (let j = 0; j <= i; j++) rez8 += "*";
    rez8 += `\n`;
}
for (let i = 2; i > 0; i--) {
    rez8 += "   ";
    for (let j = i; j > 0; j--) rez8 += "*";
    rez8 += `\n`;
}

rez8 = rez8.trimEnd();

button8.onclick = () => {
    if (out8.innerHTML) {
        out8.innerHTML = "";
        button8.innerHTML = "Run";
    } else {
        out8.innerHTML = rez8;
        button8.innerHTML = "Clear";
    }
}

// task 9 --------------------

const out9 = document.querySelector(".task-9-out#rez-9");
const button9 = document.querySelector("button.task-9");
let rez9 = "";

for (let i = 0; i < 5; i++) {
    rez9 += "   ";
    for (let j = 0; j < 6; j++) {
        if (i == 0 || i == 4 || (j == 0 || j == 5)) rez9 += "*"; else rez9 += " ";
    }
    rez9 += `\n`;
}

rez9 = rez9.trimEnd();

button9.onclick = () => {
    if (out9.innerHTML) {
        out9.innerHTML = "";
        button9.innerHTML = "Run";
    } else {
        out9.innerHTML = rez9;
        button9.innerHTML = "Clear";
    }
}

// task 10 --------------------

const out10 = document.querySelector(".task-10-out#rez-10");
const button10 = document.querySelector("button.task-10");

button10.onclick = () => {

    let rez10 = "";
    const sym10 = document.querySelector("#sym-10").value;

    for (let i = 0; i < 5; i++) {
        rez10 += "   ";
        for (let j = 0; j < 6; j++) {
            if (i == 0 || i == 4 || (j == 0 || j == 5)) rez10 += sym10; else rez10 += " ";
        }
        rez10 += `\n`;
    }

    rez10 = rez10.trimEnd();

    if (out10.innerHTML) {
        out10.innerHTML = "";
        button10.innerHTML = "Run";
    } else {
        out10.innerHTML = rez10;
        button10.innerHTML = "Clear";
    }
}


// task 11 --------------------

const out11 = document.querySelector(".task-11-out#rez-11");
let rez11 = "";

for (let i = 6; i <= 7; i++) {
    for (let j = 1; j <= 9; j++) {
        rez11 += `${i} * ${j} = ${i * j}\n`;
    }
    rez11 += "<hr>";
}

out11.innerHTML = rez11;

// task 12 --------------------

const out12 = document.querySelector(".task-12-out#rez-12");
const button12 = document.querySelector("button.task-12");
let rez12 = "";

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        rez12 += `${j} `;
    }
    rez12 += `\n`;
}

rez12 = rez12.trimEnd();

button12.onclick = () => {
    if (out12.innerHTML) {
        out12.innerHTML = "";
        button12.innerHTML = "Run";
    } else {
        out12.innerHTML = rez12;
        button12.innerHTML = "Clear";
    }
}

// task 13 --------------------

const out13 = document.querySelector(".task-13-out#rez-13");
const button13 = document.querySelector("button.task-13");
let rez13 = "";

for (let i = 0; i < 5; i++) {
    for (let j = 1; j < 10; j++) {
        rez13 += `${i}${j} `;
    }
    rez13 += `${(i + 1) * 10}\n`;
}

rez13 = rez13.trimEnd();

button13.onclick = () => {
    if (out13.innerHTML) {
        out13.innerHTML = "";
        button13.innerHTML = "Run";
    } else {
        out13.innerHTML = rez13;
        button13.innerHTML = "Clear";
    }
}

// task 14 --------------------

const out14 = document.querySelector(".task-14-out#rez-14");
const button14 = document.querySelector("button.task-14");
let rez14 = "";

for (let i = 5; i > 0; i--) {
    for (let j = i; j > 0; j--) {
        rez14 += `${j} `;
    }
    rez14 += `\n`;
}

rez14 = rez14.trimEnd();

button14.onclick = () => {
    if (out14.innerHTML) {
        out14.innerHTML = "";
        button14.innerHTML = "Run";
    } else {
        out14.innerHTML = rez14;
        button14.innerHTML = "Clear";
    }
}

