
const regNum = new RegExp(/\d/);
const regSign = new RegExp(/[+\-/*.%]/);
var dotFlag = false;
function numberAppend(id) {
    var wynik = document.getElementById("textBox");
    var elem = id.innerText;

    if (elem != ".") {
        if ((regSign.test(wynik.innerText.slice(-1)) && regSign.test(elem))) {
            alert("Two signs can't stand close to each other");
        } else if((wynik.innerText == "" && regSign.test(elem))){
            alert("You can't start with a sign");
        }else if (regSign.test(elem)) {
            dotFlag = false;
            wynik.innerText += elem;

        } else {
            wynik.innerText += elem;
        }
    } else {
        if (!dotFlag && (wynik.innerText == "" || (regSign.test(wynik.innerText.slice(-1)) && wynik.innerText.slice(-1) != "."))) {
            wynik.innerText += "0.";
            dotFlag = true;
        } else if (!dotFlag && (wynik.innerText == "" || regNum.test(wynik.innerText.slice(-1)))) {
            wynik.innerText += elem;
            dotFlag = true;
        }
        else if (dotFlag) {
            alert("Can't add another dot");
        }
    }
}
function cleanEntry() {
    document.getElementById("textBox").innerText = "";
    dotFlag = false;
}
function clean() {
    var wynik = document.getElementById("textBox");
    if (wynik.innerText.slice(-1) == ".") {
        dotFlag = false;
    }
    wynik.innerText = wynik.innerText.slice(0, -1);

}

function returnCalculation() {
    var wynik = document.getElementById("textBox");
    if (eval(wynik.innerText) == "Infinity") {
        alert("You can't divide by zero");
    }
    else if (wynik.innerText == "") {
        alert("Input is empty");
    } else {
    wynik.innerText = eval(wynik.innerText);
        if(!regSign.test(wynik.innerText)){dotFlag = false;}
        
    }

}
function negative() {
    if (wynik.innerText == "") {
        document.getElementById("textBox").innerText = "-";
    }
    else if (wynik.innerText == "-") {
        document.getElementById("textBox").innerText = "";
    }

}



