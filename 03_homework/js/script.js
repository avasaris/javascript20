const out = document.getElementById("out");
const goButton = document.querySelector("button");
// const in1 = document.getElementById("in1");
// const cb1 = document.getElementById("cb1");

goButton.onclick = (event) => {
    event.preventDefault();

    // const in1Val = in1.value;

    // console.log(in1Val);

    // goButton.style.backgroundColor = in1Val;

    // out.innerHTML = "<input type=text id=in3><button id=new>NEW</button>";

    // document.getElementById('in3').oninput = () => {
    //     console.log(document.getElementById('in3').value);
    // }

    // console.log(cb1.checked);
    // console.log(cb1.value);

    //const ta1 = document.getElementById('ta_1');

    // console.log(ta1.value);
    // ta1.value = "zazaza";

    const form1 = document.getElementById('form1');
    console.log(form1);
    console.log(form1.elements.ta_1.value);
    console.log(form1.elements.three.value);

}

// in1.oninput = () => {
//     console.log(in1.value);
//     out.innerHTML = in1.value;
// }

// cb1.oninput = () => {
//     console.log(cb1.checked);
// }