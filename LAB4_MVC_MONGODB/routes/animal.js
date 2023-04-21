const express = require('express')

const {homeView} = require('../controllers/animalController')

const router = express.Router()

router.get('/', homeView)

module.exports= router;