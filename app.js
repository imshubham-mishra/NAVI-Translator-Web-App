var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

var url = 'https://api.funtranslations.com/translate/navi.json';

function getTranslationURL(input) {
    return url+ '?text='+ input;
}

function clickHandler() {
    fetch(getTranslationURL(txtInput.value))
        .then(response =>response.json())
        .then(json => {
                   outputDiv.innerText =json.contents.translated; 
        })
        .catch(error => alert(error + ' please try again after some time!!!'));
}
btnTranslate.addEventListener("click", clickHandler);