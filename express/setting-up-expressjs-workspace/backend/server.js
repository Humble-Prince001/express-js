const express = require('express');
const {urlencoded} = require('express');
const dotenv = require('dotenv').config()
const PORT = process.env.port || 4000
const {errorhandler} = require('./middlewares/errorMid')
const connectDB = require('./config/db')

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalsRoutes'))
app.use(errorhandler)

app.listen(PORT, () => console.log('server started at ${PORT}'))
