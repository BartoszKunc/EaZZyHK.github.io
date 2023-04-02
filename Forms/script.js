
const nameRegExp = /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,30}$/; 
const streetRegExp = /^[0-9a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ\s-]{3,30}$/; 
const cityRegExp = /^([a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,20}[-\s])?[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,20}$/; 
const houseNumberRegExp = /^[1-9][0-9]{0,3}[a-zA-Z]?$/;
const apartmentNumberRegExp = /^[1-9][0-9]{0,3}[a-zA-Z]?$/;
const phoneNumberRegExp = /^(\+48)?\s*([0-9]{3}[\s-]?){3}$/; 
const dateOfBirthRegExp = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
const peselRegExp = /^[0-9]{11}$/;
const postalCodeRegExp = /^[0-9]{2}-[0-9]{3}$/;
document.getElementById("dataUro").max = new Date().toISOString().split("T")[0];
let validData = new Date();

function dataValidate(){
    
    let errorMsg = document.getElementById("errorBox");
    errorMsg.innerHTML="<p>* &dash; pole wymagane </p>";
    var errorCount = 0;
    
    if(!nameRegExp.test(document.getElementById("imie").value  )){
        errorMsg.innerHTML+="<p>Błędnie wprowadzone imię</p>";
        errorCount++;
    }
    if(document.getElementById("drugieImie").value !="" && !nameRegExp.test(document.getElementById("drugieImie").value)) {
        errorMsg.innerHTML+="<p>Błędnie wprowadzone drugię imię</p>";
        errorCount++;
    }
    if(validateSurname(document.getElementById("nazwisko").value)){
        errorMsg.innerHTML+="<p>Błędnie wprowadzone nazwisko</p>";
        errorCount++;
    }
    if(document.getElementById("ulica").value !="" && !streetRegExp.test(document.getElementById("ulica").value)){
        errorMsg.innerHTML+="<p>Błędnie wprowadzono ulicę</p>";
        errorCount++;
    }
    if(!cityRegExp.test(document.getElementById("miasto").value)){
        errorMsg.innerHTML+="<p>Błędnie wprowadzone miasto</p>";
        errorCount++;
    }
    if(!houseNumberRegExp.test(document.getElementById("nrDomu").value)){
        errorMsg.innerHTML+="<p>Błędnie wprowadzony numer domu</p>";
        errorCount++;
    }
    if(document.getElementById("nrMieszkania").value !="" && !apartmentNumberRegExp.test(document.getElementById("nrMieszkania").value)){
        errorMsg.innerHTML+="<p>Błędnie wprowadzony numer mieszkania</p>";
        errorCount++;
    }
    if(!phoneNumberRegExp.test(document.getElementById("nrTel").value)){
        errorMsg.innerHTML+="<p>Błędnie wprowadzony numer telefonu</p>";
        errorCount++;
    }
    if(!dateOfBirthRegExp.test(document.getElementById("dataUro").value) || (validData.getTime() < (new Date(document.getElementById("dataUro").value).getTime()))){
        errorMsg.innerHTML+="<p>Błędnie wprowadzona data</p>";
        errorCount++;
    }
    if(!peselRegExp.test(document.getElementById("pesel").value)){
        errorMsg.innerHTML+="<p>Błędnie wprowadzony pesel</p>";
        errorCount++;
    }
    if(!postalCodeRegExp.test(document.getElementById("kodPocztowy").value)){
        errorMsg.innerHTML+="<p>Błędnie wprowadzony kod pocztowy</p>";
        errorCount++;
    }
    if(errorCount==0){
        document.getElementById("forms").submit();
        // window.location.reload();
    }
    

}
function validateSurname(surname) {
    
    const fornameRegExp = /^([a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,20}[-\s])?[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,20}$/i;
    if(surname ==null || surname ==""){
        return true
    }
    if(!fornameRegExp.test(surname) ) {
      return true;
    }
    return false;
  }

  function imieInfo(){document.getElementById("info").innerHTML="<p>"+imieInformacja+"</p>";}
  function nazwiskoInfo(){document.getElementById("info").innerHTML="<p>"+nazwiskoInformacja+"</p>";}
  function ulicaInfo(){document.getElementById("info").innerHTML="<p>"+ulicaInformacja+"</p>";}
  function miastoInfo(){document.getElementById("info").innerHTML="<p>"+miastoInformacja+"</p>";}
  function domInfo(){document.getElementById("info").innerHTML="<p>"+domInformacja+"</p>";}
  function uwagiInfo(){document.getElementById("info").innerHTML="<p>"+uwagiInformacja+"</p>";}
  function telInfo(){document.getElementById("info").innerHTML="<p>"+telInformacja+"</p>";}
  function dataInfo(){document.getElementById("info").innerHTML="<p>"+dataInformacja+"</p>";}
  function peselInfo(){document.getElementById("info").innerHTML="<p>"+peselInformacja+"</p>";}
  function kodInfo(){document.getElementById("info").innerHTML="<p>"+kodInformacja+"</p>";}

var imieInformacja="Dozwolony format: Jeden wyraz składajcy się z liter (np. Jan, Hubert)";
var nazwiskoInformacja="Dozwolony format: Jeden (lub dwuczłonowy oddzielony myślnikiem lub spacją) wyraz składający się z liter (np. Kowalski, Kwiecień, Skłodowska-Curie, Bachleda Curuś)";
var ulicaInformacja="Brak ogólnego formatu. Możliwe znaki to litery, cyfry, myślnik i spacja";
var miastoInformacja="Dozwolony format: Jeden (lub dwuczłonowy oddzielony myślnikiem lub spacją) wyraz składający się z liter (np. Warszawa, Bielsko-Biała, Nowa Wieś)";
var domInformacja="Dowzwolony format: Maksymalnie 4 cyfrowa liczba z opcjonalną literą bez łącznika (np. 6, 9b, 60, 420, 7312)";
var uwagiInformacja="Tutaj można wpisać cokolwiek";
var telInformacja="Dozwolony format: 9 cyfrowa liczba z opcjonalną częścią kierunkową (Tylko polską tzn. +48)";
var dataInformacja="Dozwolony format: Data nie może być późniejsza niż 'dzisiaj'";
var peselInformacja="Dozwolony format: maksymalnie 11 cyfr";
var kodInformacja="Dozwolony format: 5 cyfrowy kod oddzielony myślnikiem pomiędzy 2 a 3 cyfrą (np. 05-650)";