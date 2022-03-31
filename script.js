//TODO:gererate a password

function generatePassword(){
  //TODO: your code goes here

var passlength = prompt("Choose Length between 8 - 128 characters");

var numeric = confirm("Include Numeric?");

var uppercase = confirm("Include uppercase?");

var lowercase = confirm("Include Lowercase?");

var special = confirm("Include special characters?");

//=================================================================================
  
var numericList = ["0","1","2","3","4","5","6","7","8","9"];

var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var specialList = ["?", "@", "#", "$", "&", "%", "*", "^", "+", "=" ];

var userChoice = [];

//================================================================================

if (numeric === true) {
  userChoice.push(...numericList);
}

if (uppercase === true) {
  userChoice.push(...uppercaseList);
}

if(lowercase === true) {
  userChoice.push(...lowercaseList)
}

if(special === true) {
  userChoice.push(...specialList)
}

var answers = [];

for (let i = 0; i < passlength; i++) {
  answers.push(userChoice[(Math.floor(Math.random() * userChoice.length))]);
}
  return answers.join("");
};


//promt length of characters 8 - 128 
  //lowercase
  //uppercase
  //numeric
  // and/or special characters



//when prompts are answered then a password is generated that matches selected criteria 

// display password



// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
