var btnTransalate = document.querySelector("#btn-transalate");  
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function constructURL(text) {
    return serverURL + "?" + "text=" + text
}
function errorHandler(error) {
    console.log("Error occured",error);
    alert("Something wrong with server! Try again next time.")

}
 

function clickEventHandler() {
    var inputText = txtInput.value;

    fetch(constructURL(inputText))
      .then(response => response.json)  
      .then( json => { 
        var translatedText = json.contents.translated
        outputDiv.innerText = translatedText;
      })
      .catch(errorHandler)   
}


btnTransalate.addEventListener("click", clickEventHandler) 




