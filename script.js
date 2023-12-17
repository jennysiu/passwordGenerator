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
  // let upperCase;

  upperCaseChoice = confirm(`Include uppercase? (Hit Cancel for no)`)

  // prompt user for lowercase
  // let lowerCase;

  lowerCaseChoice = confirm(`Include lower case? (Hit Cancel for no)`)

  // prompt user for numeric
  // let numeric;

  numericChoice = confirm(`Include a number? (Hit Cancel for no)`)

  // prompt user for special characters

  // let specialChars;

  specialCharsChoice = confirm(`Include a special character? (Hit Cancel for no)`)

  var passOptions = {
    passLength: passLength,
    upperCasedCharacters: upperCaseChoice,
    lowerCasedCharacters: lowerCaseChoice,
    numericCharacters: numericChoice,
    specialCharacters: specialCharsChoice,
  }
  
  // test to see if options were recorded correctly:
  console.log(passLength, passOptions)
  // return options as an object
  return passOptions;

}
// test for user prompts
// getPasswordOptions();


// *** Function for getting a random element from an array
function getRandom(arr) {
  // for testing:
  var passOptions = {
    upperCasedCharacters: true,
    lowerCasedCharacters: true,
    numericCharacters: true,
    specialCharacters: true,
  }

  // number of options selected
  let numberOfOptions = Object.keys(passOptions).length;
  // console.log(numberOfOptions);

  // join all the arrays that the user has selected yes for 
  
  let eligibleChars = [];


  // console.log(Object.values(passOptions));
  // console.log(passOptions.upperCasedCharacters);

  // if statements for each option
  // UPPERCASE
  if (passOptions.upperCasedCharacters == true) {
    // console.log("yes to upper");
    eligibleChars = eligibleChars.concat(upperCasedCharacters);
    // Test: to see eligibil array is returning as expected
    // console.log(eligibleChars);
  } else {
    // console.log(`Uppercase was not selected`);
  }
  
  // LOWERCASE
  if (passOptions.lowerCasedCharacters == true) {
    // console.log('yes to lower');
    eligibleChars = eligibleChars.concat(lowerCasedCharacters);
    // Test: to see eligibil array is returning as expected
    // console.log(eligibleChars);
  } else {
    // console.log(`Lowercase was not selected`);
  }
  
  // NUMREICS
  if (passOptions.numericCharacters == true) {
    // console.log('yes to numbers')
    eligibleChars = eligibleChars.concat(numericCharacters);
  } else {
    // console.log(`Numerics was not selected`)
  }

  // SPECIAL CHARACTERS
  if (passOptions.specialCharacters == true) {
    // console.log('yes to special charaters')
    eligibleChars = eligibleChars.concat(specialCharacters);
  } else {
    // console.log(`Special charaters was not selected`)
  }

  // Generate random character from eligibleChar array 

  // random index generator
let randomIndex = Math.floor(Math.random() * (eligibleChars.length));
console.log(randomIndex);

// random character generator from the eligibleChar array
let randomChar = eligibleChars[randomIndex];
console.log(randomChar);
return randomChar;
  
}

getRandom();


// Function to generate password with user input
function generatePassword() {
  // for testing
  let passLength = 9;
  let password = [];

  // for loop to generate password until it reaches selected length
  for (let i = 0; i < passLength; i++) {
    let randomChar = getRandom();
    password.push(randomChar);
  }
  // TEST: to see generated password
  console.log(password);
}

// iterate through pass to see if it has all characters types selected by user


generatePassword();



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