// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}
//BEGIN OF MAIN FUNCTION

function generatePassword() {

  passwordLength(); 
  number();
  special();
  lower();
  upper();


  //INDIVIDUAL FUNCTIONS FOR PASSWORD
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


  //NUMBER PASSWORD FUNCTION

  function number(){
    var numberSet = window.confirm('Would you like to have numbers?');
   
    if (numberSet == true){
    Math.floor(Math.random() * 10 );
 
    }

    else if (numberSet == false){
    
    }
    console.log(numberSet)
  }

  //SPECIAL PASSWORD FUNCTION

  function special(){
    var specialSet = window.confirm('Would you like special characters for your special password?');
    if (specialSet == true){

    }

    else if (specialSet == false){

    }
    console.log(specialSet)
  }

  //LOWER PASSWORD FUNCTION

  function lower(){
    var lowerSet = window.confirm('Would you like lowercase letters?');
    if (lowerSet == true){
      
    }
    
    else if (lowerSet == false){

    }
    console.log(lowerSet)
  }

  //UPPER PASSWORD FUNCTION

  function upper(){
    var upperSet = window.confirm('Would you like upercase letters?');
    if (upperSet == true){

    }
    else if (upperSet == false){

    }
    console.log(upperSet)
  }

}

 
 console.log
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
