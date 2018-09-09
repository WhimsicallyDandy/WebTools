/* A web tool to separate given text into a String, where each character is enclosed in <span>(char)</span> */



function spannerfy() {
    var inputText = document.forms['spanner']['spannerinput'].value.trim();
    var spanText = [];
    var charArray = inputText.split("");

    for (i=0; i<charArray.length; i++) {
        spanText.push('&ltspan&gt');
        spanText.push(charArray[i]);
        spanText.push('&lt/span&gt');
    }

    var returnText = "";

    for (i=0; i<spanText.length; i++) {
        returnText += spanText[i];
    }

    returnText +="";
    document.getElementById('spannerOutputCode').innerHTML = returnText;
    console.log(returnText);
}

