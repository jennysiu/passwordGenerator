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

const charOption = [];
const generatedPassword = [];
  // join chars once enough

// global levelso iuts accessible 

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

// 1. Present a series of prompts for password criteria
  // Length of password
    // At least 8 characters but no more than 128.
  // Character types
    // Lowercase
    // Uppercase
    // Numeric
    // Special characters ($@%&*, etc)

// 2. Code should validate for each input and at least one character type should be selected

// 3. Once prompts are answered then the password should be generated and displayed in an alert or written to the page


// Function to prompt user for password options
function getPasswordOptions() {
  // promtp user for password length
  const passLength = prompt(`Choose the length for your password between the range of 8 - 128`)
    if (passLength < 8) {
      alert(`This number is too small. Please choose a number that is bigger than 8 and smaller than 128`)
    } else if (passLength > 128) {
      alert(`This number is too big. Please choose a number that is smaller than 128 and bigger than 8`)
    }


}

getPasswordOptions();

// prompt for pass length
  // At least 8 characters but no more than 128.
    // conditional to check is it is in range 
    // prompt is string - nmeed to parse to integer
    // if user unout out of range - return our of funtion or call the function again 
// Function for getting a random element from an array


// confirm which char sets to use
  // ask user if they want upper, special etc
  // if user returns false for all - return or call function again 
  // generate random char for each selected char set
  // push selected char sets to a mega-array of all selected chars 
  // OR keep array separate and generate a random number to select the array and another to select the index 

// once character selected - move on to generating random characters


function getRandom(arr) {

}
// var for password
// var for index

// for loop that loops selected length number of times
  // generate a number 
  // this is the index for the mega arry
  // mega-array[generated-index] is the actual character
  // add that char to password 
  // return


// Function to generate password with user input
function generatePassword() {

}

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


