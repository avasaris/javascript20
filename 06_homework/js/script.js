// task 1 --------------------

const out1 = document.querySelector('.task-1-out#rez1');
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

const out2 = document.querySelector(".task-2-out#rez2");
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

const out3 = document.querySelector(".task-3-out#rez3");
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

const out4 = document.querySelector(".task-4-out#rez4");
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

const out5 = document.querySelector(".task-5-out#rez5");
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

const out6 = document.querySelector(".task-6-out#rez6");
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

