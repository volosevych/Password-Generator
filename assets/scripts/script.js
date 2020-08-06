// Assignment Code
const generateButton = document.getElementById('generateBtn');

generateButton.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Prompts that come up after you click generate password
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password. It must be more than 12 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;


  function getUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getSpecialCharacters() {
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random() * SpecialCharacters.length)];
  }
}

if (numbers === true) {
  minimumNumbers = functionArray[0];
  minimumCount++;

}

if (lowerCases === true) {
  minimumLowerCases = functionArray[1];
  minimumCount++;

}

if (upperCases === true) {
  minimumUpperCases = functionArray[2];
  minimumCount++;

}

if (special === true) {
  minimumSpecialCharacters = functionArray[3];
  minimumCount++;

}
