// Assignment code here

var generateBtn = document.querySelector("#generate");

//BEGIN OF MAIN FUNCTION

function generatePassword() {

  //VARIABLES FOR OPTIONS

var allLowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var allUpperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var allSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", ".", ";", ":", "-", "+", "?", "~", "`", "|", "_", "'"];

//VARIABLE OPTIONS ARRAYS END

//RESULTS LOGGED

var resultsTotal = [];
var resultsTotaluser = [];

//RESULT LOGGER END

  //LENGTH START

    var promptLength = window.prompt('From 8 to 128 how many characters do you want?');

    if (promptLength < 8) {
      window.alert ('The minimum length is 8 characters. Please choose a higher number. ⏫'); 
      passwordGen();
    } 
    
    else if (promptLength > 128) {
      window.alert ('The maximum length is 128 characters. Please choose a lower number. ⏬');
      passwordGen();
    }

    else if (isNaN(promptLength)) {
      window.alert ('Thats not a number! 👹');
      passwordGen();
    }
 
    else {
      promptLength = promptLength;
    }

    console.log(promptLength);


  //LENGTH SECTION HAS ENDED

  //HOUSE OF PROMPTS
  
  var lower = confirm ("Would you like any lowercase 🔤");
  var upper = confirm ("Would you like any upper case letters? 🔠");
  var number = confirm ("Would you like any numbers? 💯");
  var special = confirm ("Would you like special characters in your special password? ✨");

 //END HOUSE OF PROMPTS


 //HOUSE OF CONDITIONS

 if (lower){
  resultsTotal = resultsTotal.concat(allLowerCases);
 }

 if (upper){
  resultsTotal = resultsTotal.concat(allUpperCases);
 }

 if (number) {
  resultsTotal = resultsTotal.concat(allNumbers);
 }

 if (special){
  resultsTotal = resultsTotal.concat(allSpecial);
 }
 console.log(resultsTotal)


 for (var i = 0; i < promptLength; i++) {

  resultsTotaluser.push (resultsTotal[Math.floor(Math.random() * resultsTotal.length)]);
} 

   return resultsTotaluser.join("") ;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
