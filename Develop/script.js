// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

function generatePassword() {

  passwordLength(); 
  numberSet();
  specialSet();

  function passwordLength(){
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
   console.log(promptLength)

  };

  function numberSet(){
    var numberSet = window.confirm('Would you like to have numbers?');
    
  };

  function specialSet(){
    var specialSet = window.confirm('Would you like special characters for your special password?');

  }

  

}

 
 console.log
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
