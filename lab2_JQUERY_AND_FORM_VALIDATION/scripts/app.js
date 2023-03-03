// Created By Akhil John Sunny
// Date 02 Feb 2023
// Student ID :100850105

/**
 * Redirect after a specific period of time
 * @param {*} e 
 * 
 */
function timedRedirect(e){
    let contactName = document.getElementById('userName').value
    let contactEmail = document.getElementById('inputEmail').value
    let contactPhone = document.getElementById('inputPhone').value
    let contactMessage = document.getElementById('textAreaInput').value
    console.log(contactEmail+" "+contactName+" "+contactPhone+" "+contactMessage)
    e.preventDefault()
    setTimeout(function (){
        window.location.href = "index.html"
    },3000)

}

let submitButton = document.getElementById('submit-button')
if (submitButton){
    submitButton.addEventListener('click', timedRedirect, false)
}

/**
 * Function to insert bodycopy
 * @param {*} elementId 
 * @param {*} textToAdd 
 */
function addText (elementId, textToAdd)
{
    
    elementId.innerHTML = textToAdd

}

// Add welcome message to index page 
let indexText1 = document.getElementById("welcome")// FInd text element

let welcomeText = "Welcome to the web page of  Akhil John Sunny" //Store the text
if(indexText1){
        addText (indexText1, welcomeText)// Call add text function
    }



// Add  message to services page
let serviceText1 =document.getElementById("serviceText1")
let serviceMsg1 = "Web designing services which is compatable in both computers and mobile phones"
if(serviceText1){
    addText (serviceText1, serviceMsg1)
}


let serviceText2 =document.getElementById("serviceText2")
let serviceMsg2 = "Advance interactive games for the taste of both children and adults"

if(serviceText2){
    addText (serviceText2, serviceMsg2)
}

let serviceText3 =document.getElementById("serviceText3")
let serviceMsg3 = "Applications that are compatable for both ios and Android"

if(serviceText3){
    addText (serviceText3, serviceMsg3)
}
// Add  message to products page
let productText1 =document.getElementById("productText1")
let productMsg1 = "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future."
if(productText1){
    addText (productText1, productMsg1)
}
let productText2 =document.getElementById("productText2")
let productMsg2 = "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby"
if(productText2){
    addText (productText2, productMsg2)
}

let productText3 =document.getElementById("productText3")
let productMsg3 = "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm."

if(productText1){
    addText (productText3, productMsg3)
}

//Change products to iterests in navbar
let productNav = document.getElementsByClassName("nav-item")[1]// Get list element
console.log(productNav)
let listItem = productNav.firstElementChild//Get anchor element
listItem.innerHTML = "Interests"// Set the child element value
console.log(listItem)

// Create a link between about and contact 

let navBar1 = document.getElementsByClassName("nav")[0]// Find nav bar
let hrNav = document.createElement('li'); //create li element
let newAnchor = document.createElement('a');// Create anchor element
newAnchor.innerHTML = "Human Resources" // Assign inner HTML
newAnchor.setAttribute('href','#')// Assign link
newAnchor.setAttribute('class', "nav-link")//Assign class
hrNav.appendChild(newAnchor)//Append anchor to li
let contactNav = document.getElementsByClassName("nav-item")[4]// Get contact navbar item
navBar1.insertBefore(hrNav, contactNav)// insert hr nav before contact nav