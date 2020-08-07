// Assignment Code
var generateBtn = document.querySelector("#generate");

alert('Hi, you will chose what password do you want by answering couple of questions.')

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
