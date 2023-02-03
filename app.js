// // console.log("Hello World");
// // //alert("k xa");
// let response = prompt("what is your name?");
// // //console.log(response);
// // alert("Hello " + response);
// let output = document.querySelector("#output");
// console.log(output);
// output.innerText = response;
let yourName = document.querySelector("#yourName");
let theirName = document.querySelector("#theirName")
let output = document.querySelector("#output")

function calculate() {
    let name1 = yourName.value;
    let name2 = theirName.value;
    console.log(name1, name2);
    output.innerText = name1 + "" + name2 + "" + LovePercent + "% in love";
    name1.value = ""
    name2.value = ""

}
