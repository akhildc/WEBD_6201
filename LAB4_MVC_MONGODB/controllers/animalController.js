// Created By: Akhil John Sunny
// Date: April 20 2023
const mongoose =require("mongoose")
const bcrypt = require('bcryptjs')

require('../model/Animal')
const Animal = mongoose.model('Animal')

const homeView = (req, res) =>{
   const pageTitle = "Home Page"
    res.render('home', {
        pageTitle: pageTitle
    })
}

const formView=(req, res) =>{
    const pageTitle = "Animal Entry Form"
    res.render("form",{
        pageTitle: pageTitle
    })
}
const formSubmission = (req, res) =>{
    const{zoo, scientificName,commonName, givenName, gender, dob, age, isTransportable} = req.body

    Animal.findOne({givenName: givenName}).then((animal)=>{
        if(animal){
            console.log('Name already exist')
            const pageTitle = "Already Registered"
            message ="Animal is already registered"
            res.render('form-submission',{
                pageTitle: pageTitle,
                alreadyRegistered : true,
                message: message
            })
        } else{
            const newAnimal = new Animal({
                zoo, scientificName,commonName, givenName, gender, dob, age, isTransportable
            })
            newAnimal.save().then(()=>{
                const pageTitle = "New User Registered"
                const registeredMessage = " Animal has been registered"
                res.render('/form-submission',{
                    pageTitle : pageTitle,
                    registeredMessage:registeredMessage,
                    alreadyRegistered:false

                }).catch((err)=> console.log(err))
            })
        }
    })
}

module.exports = {
    homeView,
    formView,
    formSubmission
}