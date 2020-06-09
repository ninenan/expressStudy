const express = require('express')
const router = express.Router()
const NewsControl = require('../controllers/news_controllers')

router.post('/createNews', NewsControl.createNews)

module.exports = router
