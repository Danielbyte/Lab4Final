'use strict'
const express = require('express')
const app = express()
// load body-parser
const bodyParser = require('body-parser')

// Load Routes
const classRouter = require('./classRoutes.js')

// Tell express to use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// mount routers
app.use('/', classRouter)
// Mount public directry to '/cdn'
// scripts folder will be at /cdn/scripts
app.use('/cdn', express.static('public'))
const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log('Express server running on port: ', PORT)
