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


// 2. Code should validate for each input and at least one character type should be selected

let charOptions = {};
  // join chars once enough


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
  upperCaseChoice = confirm(`Include uppercase? (Hit Cancel for no)`)

  // prompt user for lowercase
  lowerCaseChoice = confirm(`Include lower case? (Hit Cancel for no)`)

  // prompt user for numeric
  numericChoice = confirm(`Include a number? (Hit Cancel for no)`)

  // prompt user for special characters
  specialCharsChoice = confirm(`Include a special character? (Hit Cancel for no)`)
  
  while (upperCaseChoice == false && lowerCaseChoice == false && numericChoice == false && specialCharsChoice == false) {
    alert(`Please select at least one criteria`);
    getPasswordOptions();
  }

  passOptions = {
    passLength: passLength,
    charOptions: {
      upperCasedCharacters: upperCaseChoice,
      lowerCasedCharacters: lowerCaseChoice,
      numericCharacters: numericChoice,
      specialCharacters: specialCharsChoice,
    }
  }

  // test to see if options were recorded correctly:
  console.log(passOptions);
  // return options as an object
  return {passOptions};

}
// test for user prompts
getPasswordOptions();

// FOR TESTING:
// let passLength = 9;
// let upperCaseChoice = true;
// let lowerCaseChoice = true;
// let numericChoice = true;
// let specialCharsChoice = true;

// passOptions = {
//   passLength: passLength,
//   charOptions: {
//     upperCasedCharacters: upperCaseChoice,
//     lowerCasedCharacters: lowerCaseChoice,
//     numericCharacters: numericChoice,
//     specialCharacters: specialCharsChoice,
//   }
// }

// variable to store an array of characters to satisfy user criteria
let criteriaChars = [];

// *** Function for getting a random character from an array
function getRandom() {

  // join all the arrays that the user has selected yes for 
  let eligibleChars = [];

  // if statements for each option (add to new eligible array if selected) 
  // AND add a cahracter from that array to criteria Chars if user selected yes

  // UPPERCASE
  if (passOptions.charOptions.upperCasedCharacters == true) {
    eligibleChars = eligibleChars.concat(upperCasedCharacters);
    // Test: to see eligibil array is returning as expected
    // console.log(eligibleChars);

    // random character generator from the upper array
    let randomIndex = Math.floor(Math.random() * (upperCasedCharacters.length) );
    let randomUpper = upperCasedCharacters[randomIndex];
    criteriaChars.push(randomUpper);
    // Test: to see randomUpper
    // console.log(randomUpper)
  }
  
  // LOWERCASE
  if (passOptions.charOptions.lowerCasedCharacters == true) {
    // console.log('yes to lower');
    eligibleChars = eligibleChars.concat(lowerCasedCharacters);
    
    // random character generator from the lower array
    randomIndex = Math.floor(Math.random()* (lowerCasedCharacters.length));
    let randomLower = lowerCasedCharacters[randomIndex];
    criteriaChars.push(randomLower);
  }
  
  // NUMREICS
  if (passOptions.charOptions.numericCharacters == true) {
    // console.log('yes to numbers')
    eligibleChars = eligibleChars.concat(numericCharacters);

    // random character generator from the numeric array
    randomIndex = Math.floor(Math.random()* (numericCharacters.length));
    let randomNumeric = numericCharacters[randomIndex];
    criteriaChars.push(randomNumeric);
  } 

  // SPECIAL CHARACTERS
  if (passOptions.charOptions.specialCharacters == true) {
    // console.log('yes to special charaters')
    eligibleChars = eligibleChars.concat(specialCharacters);

    // random character generator from the special chars array
    randomIndex = Math.floor(Math.random()* (specialCharacters.length));
    let randomSpecialChar = specialCharacters[randomIndex];
    criteriaChars.push(randomSpecialChar);
  } 

  // Generate random character from pool of eligibleChar array 
  randomIndex = Math.floor(Math.random()* (eligibleChars.length));
  
  // random character generator from the eligibleChar array
  let randomChar = eligibleChars[randomIndex];
  // console.log(randomChar);

  return (randomChar)
}

// getRandom();

// test: check the criteria characters logs out fine
  // console.log(criteriaChars)

// Function to generate password with user input
function generatePassword() {
  let generatedPassword = [];
  generatedPassword = generatedPassword.concat(criteriaChars);

  // for loop to generate generatedPassword until it reaches selected length
  for (let i = criteriaChars.length; i < passOptions.passLength; i++) {
    let randomChar = getRandom();
    generatedPassword.push(randomChar);
  }
  // TEST: to see generated generatedPassword
  // console.log(generatedPassword);

  // reset criteriaChars so it doesn't get carried forward
  criteriaChars = [];
  return generatedPassword;
}

// generatePassword();


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword().join("");
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
