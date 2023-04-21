// Created By: Akhil John Sunny
// Date: April 20 2023
const express = require('express')

const {homeView,formView, formSubmission } = require('../controllers/animalController')

const router = express.Router()

router.get('/', homeView)

router.get('/form', formView)

router.post('/form', formSubmission)

module.exports= router;