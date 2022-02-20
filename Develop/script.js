// Assignment code here

function generatePassword() {

var allLowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var allUpperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var allSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", ".", ";", ":", "-", "+", "?", "~", "`", "|", "_", "'"];
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}
//BEGIN OF MAIN FUNCTION



  passwordLength(); 
  number();
  special();
  lower();
  upper();


  //INDIVIDUAL FUNCTIONS FOR PASSWORD

    var promptLength = window.prompt('From 8 to 128 how many characters do you want?');

    if (promptLength < 8){
      window.alert ('Not enough characters please choose a valid number.') 
      generatePassword();
    } 
    
    else if (promptLength > 128){
      window.alert ('To many characters choose less!')
      generatePassword();
    }

    else if (isNaN(promptLength)){
      window.alert ('Thats not a number!')
      generatePassword();
    }
    
 
    else {
      promptLength = promptLength;
    }
    
    console.log(promptLength);

  //NUMBER PASSWORD FUNCTION

 
    var numberSet = window.confirm('Would you like to have numbers?');
   
    if (true){
     
    }

    console.log(numberSet)
  }

  //SPECIAL PASSWORD FUNCTION

  function special(){
    var specialSet = window.confirm('Would you like special characters for your special password?');
    if (true){

    }

    console.log(specialSet)
  }

  //LOWER PASSWORD FUNCTION

  function lower(){
    var lowerSet = window.confirm('Would you like lowercase letters?');
    if (true){
      
    }
 
    console.log(lowerSet)
  }

  //UPPER PASSWORD FUNCTION

  function upper(){
    var upperSet = window.confirm('Would you like upercase letters?');
    if (true){

    }
  
    console.log(upperSet)
  }

}

 
 console.log
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
