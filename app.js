var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('.output');

var url = 'https://api.funtranslations.com/translate/navi.json';

function getTranslationURL(input) {
    return url + '?' + 'texts= ' + input;
}

function errorHandler(error) {
    console.log("error occured ", error);
    // alert("please try again after some time!!!")
}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated;;
        })
        .catch(error => alert(error +' please try again after some time!!! '));
}
btnTranslate.addEventListener("click", clickHandler);