var btnTranslate = document.querySelector("#btn-translate");
var text = document.querySelector("#text");
var outputDev = document.querySelector("#output");


function clickHandler() {
    outputDev.innerText = "ajio da bananu " + text.value;
};

btnTranslate.addEventListener("click", clickHandler );

