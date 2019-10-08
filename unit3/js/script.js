const out = document.getElementById("out");
const goButton = document.querySelector("button");


goButton.onclick = () => {
    const in1 = document.getElementById("in1").value;
    const in2 = document.getElementById("in2").value;

    if (in1 == in2) {
        out.innerHTML = "equals";
    } else {
        out.innerHTML = Math.max(in1, in2);
    }
}