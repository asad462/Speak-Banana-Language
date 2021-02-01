//These APIs are used in every browser, it is a way to interact with the browser.
var btnTransalate = document.querySelector("#btn-transalate");  //DOM Scripting. "#" is used as id selector. querySelector searches the HTML document and finds the element with the relevant id.

var txtInput = document.querySelector("#txt-input");
console.log(txtInput)

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function constructURL(text){
    return serverURL + "?" + "text=" + text
}
function errorHandler(error){
    console.log("Error occured",error)
    alert("Something wrong with server! Try again next time.")

}
 

function clickEventHandler() {
    //outputDiv.innerText = "Transalated : "+ txtInput.nodeValue; 
    //Used if we want to write the value somewhere
    var inputText = txtInput.value;

    fetch(constructURL(inputText))
    .then[response => response.json]
    .then[json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    }]
    .catch(errorHandler)   //No need to pass argument to this callback function. 
}


btnTransalate.addEventListener("click", clickEventHandler) // 'click' event is added and when it is encountered, the function gets executed. It is a callback function.




