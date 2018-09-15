/* A web tool to separate given text into a String, where each character is enclosed in <span>(char)</span> */



function spanify() {
    var inputText = document.forms['spanifyer']['spanifyinput'].value.trim();
    var spanText = [];
    var charArray = inputText.split("");
	var spanclass = inputText.replace(/\s/g,'');

    for (i=0; i<charArray.length; i++) {
	spanText.push('&ltspan' + ' id="' + i + '" class="' + spanclass + '"&gt');
        spanText.push(charArray[i]);
        spanText.push('&lt/span&gt' + '<br>');
    }

    var returnText = "";

    for (i=0; i<spanText.length; i++) {
        returnText += spanText[i];
    }

    returnText +="";
    document.getElementById('spanifyOutputCode').innerHTML = returnText;
    console.log(returnText);
}

