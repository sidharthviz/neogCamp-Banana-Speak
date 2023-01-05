var btnTranslate = document.querySelector("#btn-translate");
var text = document.querySelector("#text");
var outputDev = document.querySelector("#output");

var ServerUrl = "https://api.funtranslations.com/translate/minion.json"

 function getTranslation(text) {
    return ServerUrl + "?" + "text=" + text
 }  


function errorHandler(error){
    console.log("error Occurred", error)
    alert("Something's Wrong, Please check");
}

function clickHandler() {
    var getText = text.value;

    fetch(getTranslation(getText))
    .then(response => response.json())
    .then(json => {
        var translateText = json.contents.translated;

        outputDev.innerText  = translateText
    })
        
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler );

