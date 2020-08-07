const generateButton = document.getElementById('generateBtn');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password. It must be more than 12 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  const randomFunc = {
    lower: lowerCases,
    upper: upperCases,
    number: numbers,
    symbol: special
  };


// Generator functions
// Getting the Browser Character Set http://net-comber.com/charset.html
// Make random for lower-case letters
  function lowerCases() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Make random for upper-case letters
function upperCases() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Random for numbers
function numbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// And symbols
function special() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

generateButton.addEventListener('click', () => {
  const length = passwordLength.value;

  console.log(length);
});
};

