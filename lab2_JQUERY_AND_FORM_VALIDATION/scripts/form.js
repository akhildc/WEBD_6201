// import everything from user.js as alias userClass
import * as userClass from "./user.js"
// Adds the user name to navbar when Login button is clicked
$(document).ready(function() {//https://www.w3schools.com/jquery/event_ready.asp
    $("#sign-in-button").click(function() {
        // Get the value of username
      let username = $("#userNameInput").val();
      // If username not empty
      if (username !== "") {
        // Create a new nav item with user name
        let newNavItem = $("<li class='nav-item'><a class='nav-link' href='index.html'>" + username + "</a></li>");
        // Add the new nav item into the nav list
        $("#contact-link").after(newNavItem);
      }
    });
  })

/**
 * function to create div element ErrorMessage
 */

function createDivError(){
  // create the error message div
  let errorMessage = $("<div id='ErrorMessage'></div>")
  // set the initial CSS for the error message div
  errorMessage.css({
    "background-color": "pink",
    "color": "red",
    "width": "100%",

  });

$("body").append(errorMessage)
//errorMessage.hide()

}
// Store the registration submit button element  
let regSubmitButton = document.getElementById("btnRegSubmit")
// If there is registration submit button call the element to create div
if(regSubmitButton){
  createDivError()
}
/**
 * Function to validate email
 * @returns 
 */
// Function to validate name
function validateName(){
  // Get the first name and last name and store it to a variable
  let firstNameInput = $('#inputFirst').val()
  let lastNameInput = $('#inputLast').val()
  //console.log("The name is "+ firstNameInput)
  // Validate first name and last name
  if (firstNameInput.length < 2 || lastNameInput.length < 2){    
    $('#ErrorMessage').show()
    //console.log(" Here is the error")
    // Retiurn error message to be displayed
    return "<p> The first name or last name is short </p>"
  }
  else {
    // If no error return nothing
      return "";
  }
}
/**
 * Function to validate email
 * @returns Error message is returned
 */
function validateEmail(){
  let email = $('#inputEmail').val()
  // Validate email input
  if(email.length < 8 || email.indexOf("@")< 1){
    // Return error message to be displayed
    $('#ErrorMessage').show()
    return "<p> The email entered is not valid </p>"
  }
  // If no error return nothing
  else{
    return "";
  }
}
/**
 * Function to validate password
 * @returns Error message is returned
 */
function validatePassword(){
  // Get the input passwords
  let pass1 = $('#inputPassword').val()
  let pass2 =$('#inputPassword2').val()
  // Validate password and return error message
  if (pass1 !== pass2){
    $('#ErrorMessage').show()
    return "<p> The passwords must be same</p>"
  }
   // Validate password and return error message
  else if (pass1.length < 6){
    $('#ErrorMessage').show()
    return "<p> The password is too small</p>"
  }
  // If no error return nothing
  else{
    return "";
  }
}

// If the submit button is on the page
if ($("#btnRegSubmit")) {
  // Click function
  $("#btnRegSubmit").click(function (e) {
      // prevent the default submit action (stay on the page)
      e.preventDefault()
      //Calls the functions to validate user inputs
      //If there is any error add the message to the div element with id error message
      $('#ErrorMessage').html(validateName())
      $('#ErrorMessage').html($('#ErrorMessage').html() + validatePassword())
      $('#ErrorMessage').html($('#ErrorMessage').html() + validateEmail())
     // if there are no error message
     let error = $('#ErrorMessage').text()
     //console.log("the error is "+ error)
      if(error.length === 0){
        const new_user = new userClass.User(
          // get the first name input
          $("#inputFirst").val(),
          // get the last name input
          $("#inputLast").val(),
          // get the username input
          $("#inputUsername").val(),
          // get the email input
          $("#inputEmail").val(),
          // get the password input
          $("#inputPassword").val()
      );
      // Display user details on console
      console.log(`User Details: ${new_user.displayUser()}`)
      }
      else {
        //$('#ErrorMessage').html('<p>Correct all errors</p>')
      }
    })
}
// If the reset button is on the page
if ($("#btnRegReset")) {
  // Click function
  $("#btnRegReset").click(function (e) {
    // Deconstruct the user object
    const new_user = new userClass.User('','','','','')
    // Display empty user class on console.
    console.log(`User Details: ${new_user.displayUser()}`)
  })
  
}
 

