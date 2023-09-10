// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Generator
function generatePassword() {
  // Declare variables used to create the random password
  var password = "";
  var lower = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
      const lowerArray = lower.split(" ");
  var upper = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
    const upperArray = upper.split(" ");
  var num = "0 1 2 3 4 5 6 7 8 9";
    const numArray = num.split(" ");
  var spChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const spCharArray = Array.from(spChar);
  var passwordStorage = [];

  // Determine password length from user input

  // Prompt the user to answer
  var lengthPass = prompt("Desired password length?", "Pick a number from 8-128");
  // Keep prompting user to answer until input is a number between 8 and 128 (incl. 8 and 128)
  while (lengthPass >=! 8 && lengthPass <=! 128) { 
    lengthPass = prompt("Desired password length?", "Pick a number from 8-128");
  }

  // Determine character types from user input

  // Prompt user until they pick at least one parameter
  var lowerPass, upperPass, numPass, spCharPass;

  while (!lowerPass && !upperPass && !numPass && !spCharPass) {
    var lowerPass = confirm("Do you want lowercase characters?\n(OK for yes or Cancel for no)");
    var upperPass = confirm("Do you want uppercase characters?\n(OK for yes or Cancel for no)");
    var numPass = confirm("Do you want numbers?\n(OK for yes or Cancel for no)");
    var spCharPass = confirm("Do you want special characters?\n(OK for yes or Cancel for no)");

    if (!lowerPass && !upperPass && !numPass && !spCharPass) {
      alert("Please select at least one password parameter!");
    }
  }

  // Concats based on input
  if (lowerPass) {
    for (var x = 0; x < lowerArray.length; x++) {
      passwordStorage.push(lowerArray[x]);
    }
  }
  if (upperPass) {
    for (var x = 0; x < upperArray.length; x++) {
      passwordStorage.push(upperArray[x]);
    }
  }
  if (numPass) {
    for (var x = 0; x < numArray.length; x++){
      passwordStorage.push(numArray[x]);
    }
  }
  if (spCharPass) {
    for (var x = 0; x < spCharArray.length; x++){
      passwordStorage.push(spCharArray[x]);
    }
  }

  // Generate password based on parameters selected
  for (var x = 0; x < lengthPass; x++) {
    var char = Math.floor(Math.random() * passwordStorage.length + 1);
    password += passwordStorage[char];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
