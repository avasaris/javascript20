

(function () {
    console.log("Arthur");
    console.log(5);

    document.getElementById("out").innerHTML = "Arthur";
    document.querySelector("h2.pfo").innerHTML = 5;
    document.querySelector("#one").innerHTML = 777;
    document.getElementById("one").innerHTML = 7778;
    document.querySelector("h2 span").innerHTML = "world";
    document.querySelector(".three").innerHTML = "<h3>Some text</h3>";


    pFour = document.querySelector(".four");
    pFour.innerHTML = "test";
    pFour.innerHTML += "<b> OK</b>";

    vDiv = document.querySelector(".test-1");
    vDiv.innerHTML = "test1";
    console.log(vDiv);

    vDiv2 = document.querySelector(".test-2");
    vDiv2.innerHTML = "test2";
    console.log(vDiv2);
    vDiv2 = 5;
    console.log(vDiv2);
});

divS3 = document.querySelector("div.s3");
console.log(divS3);
divS3 = document.querySelector("div.s4");
console.log(divS3);

// body = document.querySelector("body");
// body.innerHTML="";


