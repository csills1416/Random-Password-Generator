// Assignment code here
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_-+=";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var includeLowercase = confirm("Include Lowercase Letters?")
var includeUppercase = confirm("Include Uppercase Letters?")
var includeNumeric = confirm("Include numbers?")
var includeSpecial = confirm("Include special characters?")


if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  alert("Please select one character type to generate.");
}

var passwordChars = "";
if (includeUppercase) {
  passwordChars += uppercaseChars;
}
if (includeLowercase) {
  passwordChars += lowercaseChars;
}
if (includeNumeric) {
  passwordChars += numericChars;
}
if (includeSpecial) {
  passwordChars += specialChars;
}

var passwordLength = prompt("How long do you want your possword to be?");

if (isNAN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Invalid password: Password must be between 8 and 128 characters");
}

var password = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); {

    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random()) * passwordChars.length
      password += passwordChars. charAt(randomIndex);
    }    

  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);