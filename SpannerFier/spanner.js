/* A web tool to separate given text into a String, where each character is enclosed in <span>(char)</span> */



function spannerfy() {
    var inputText = String.trim(document.forms['spanner']['spannerinput'].value);
    var spanText = [];
    var charArray = inputText.split("");

    for (i=0; i<charArray.length; i++) {
        spanText.push('<span>');
        spanText.push(charArray[i]);
        spanText.push('</span>');
    }

    var returnText = "";

    for (i=0; i<spanText.length; i++) {
        returnText += spanText[i];
    }

    alert(returnText);
}

