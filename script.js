// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// **** CRITERIA ****
// Generate a password when the button is clicked

// !1. Present a series of prompts for password criteria
  // Length of password
    // At least 8 characters but no more than 128.
  // Character types
    // Lowercase
    // Uppercase
    // Numeric
    // Special characters ($@%&*, etc)

// 2. Code should validate for each input and at least one character type should be selected

// 3. Once prompts are answered then the password should be generated and displayed in an alert or written to the page

const charOption = [];
const generatedPassword = [];
  // join chars once enough

// global levels iuts accessible 

// Function to prompt user for password options
function getPasswordOptions() {
  // prompt user for password length
  let passLength = parseInt(prompt(`Choose the length for your password (between the range of 8 to 128)`));

  while (passLength < 8 || passLength > 128 || (isNaN(passLength))) {
    if (passLength < 8) {
        alert(`This number is too small. Please choose a number that is bigger than 8 and smaller than 128`)
      } else if (passLength > 128) {
        alert(`This number is too big. Please choose a number that is smaller than 128 and bigger than 8`)
      } else {
        alert(`Invalid response. Please type a number between 8 and 128`)
      }
    passLength = parseInt(prompt(`Choose the length for your password (between the range of 8 to 128)`));
  }


  // prompt user for upper case
  let upperCase;

  upperCase = confirm(`Include uppercase? (Hit Cancel for no)`)

  // prompt user for lowercase
  let lowerCase;

  upperCase = confirm(`Include lower case? (Hit Cancel for no)`)

  // prompt user for numeric
  let numeric;

  numeric = confirm(`Include a number? (Hit Cancel for no)`)

  // prompt user for special characters

  let specialChars;

  specialChars = confirm(`Include a special character? (Hit Cancel for no)`)

  // return options as an object
  return {passLength, upperCase, lowerCase, numeric, specialChars};

}

// getPasswordOptions();


// Function for getting a random element from an array
function getRandom(arr) {

  // join all the arrays that the user has selected yes for 
  


  // // FOR TESTING:
  // let uppercase = true;
  // let lower

  // // **** generate random uppercase ****
  // if (uppercase) {
  //   // generate random index number for uppercase characters
  //   let randomUpperIndex = Math.floor(Math.random() * upperCasedCharacters.length);
  //   let upperChar = upperCasedCharacters[randomUpperIndex];
  //   // FOR TESTING: to see if uppercase is fetched as expected
  //   console.log(`Random Upper = ${upperChar}`)
  // } else {
  //   upperChar = null;
  // }

  // // **** generate random lowercase ****

  // return {upperChar};
}

getRandom();





// confirm which char sets to use
  // ask user if they want upper, special etc
  // if user returns false for all - return or call function again 
  // generate random char for each selected char set
  // push selected char sets to a mega-array of all selected chars 
  // OR keep array separate and generate a random number to select the array and another to select the index 

// once character selected - move on to generating random characters


// Function to generate password with user input
function generatePassword() {

}

// var for password
// var for index

// for loop that loops selected length number of times
  // generate a number 
  // this is the index for the mega arry
  // mega-array[generated-index] is the actual character
  // add that char to password 
  // return

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);