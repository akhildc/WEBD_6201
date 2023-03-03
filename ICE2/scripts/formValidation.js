// console.log("formValidation.js loaded");

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
function ValidateEmailAddressSimple(emailString) {
    console.log('in ValidateEmailAddress');

    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if(atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
// */
//  function ValidateEmailAddressRegex(emailString) {
// //     //the regular expression to validate the email address for string+string|number bewten 2-20 characters
// //     // note the / and / at the beginning and end of the expression
//      let emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;

// //     //return true if the email address is valid - how to use regex
// 	return !!emailString && typeof emailString === 'string'
// 		&& emailString.match(emailRegex);
// }
// function to validate the user name
function validateUserName() {
    // get the text at username
    let username = document.getElementById('usernameInput').value
    // Assign regular expression for username
    let usernameRegex = '^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$'; 
    console.log('in Validate userName')
    // Get the username input element
    let usernameInputEl = document.getElementById('usernameInput')
    // get the user name error element
    let usernameErrorEl = document.getElementById('usernameError')
    // get the general error element
    let genErEl = document.getElementById('generalError')
    // Set background color
    let backgroundColor = "#ffffff"
    let genErMsg = ""
    let usernameErMsg = ""
    // Verify if length is less than 5
    if(username.length < 5){
        // error message
        genErMsg = "Username must be atleast 5 characters long"
        usernameErMsg = "Username must be atleast 5 characters long" 
        // Set back ground color red
        backgroundColor = "#e5989b"
    }
    //verify if length more than 20
    else if(username.length > 20){
        // error message
        genErMsg = "Username must be less than 20 characters long"
        usernameErMsg = "Username must be less than 20 characters long" 
        // Set back ground color red
        backgroundColor = "#e5989b"
    }
    //Verify if there is any space
    else if(!username.match(usernameRegex)){
        // error message
        genErMsg = "Username cannot have spaces"
        usernameErMsg = "Username cannot have spaces" 
        // Set back ground color red
        backgroundColor = "#e5989b"
    }
    // Display error messages
    genErEl.innerHTML = genErMsg
    usernameErrorEl.innerHTML = usernameErMsg
    //Set background color
    usernameInputEl.style.backgroundColor = backgroundColor
}    

// Function to clear error mesages
function clearErrorMessages(){
    // Get the error element by class
    let errors = document.getElementsByClassName('errorOut')
    // Clears the error messages
    for (let i = 0; i<errors.length; i++){
        errors[i].innerHTML=""
    }
}

//TODO:
// Make all fields required - Done
// Add a pattern attribute in the telephone element (HTML)- Done
// Ensure the password is redacted into dots on screen when typed - Done
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!)Done
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)Done
// Validate the username when the form is submitted Done
// Clear any additional error message and highlighting when the form is reset Done
// COMMENT EVERYTHING :D Done
// Pop your .js file into the meeting chat when you're done and we'll have a look at some examples! (Feel free to leave your name off)

// Get the submit button element
let submitButton = document.getElementById('submit-reg-form')
let userName = document.getElementById('usernameInput').value
// Check if submit button is clicked
if (submitButton){
    submitButton.addEventListener('click', function(e){
        e.preventDefault()
        // Call the validateUserName function
        validateUserName()
    }, false)
        
}
// Get the reset button
let resetButton = document.getElementById('reset-reg-form')
//Check if the reset button is clicked
if (resetButton){
    // Call the clearErrorMessage function
    resetButton.addEventListener('click', function(e){
        clearErrorMessages()

    })
}