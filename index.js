require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const personRoutes = require('./routes/personRoutes')

app.use(express.json())
app.use('/person', personRoutes)

app.use(
    express.urlencoded({
        extend: true
    })
)

const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASS)

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@apicluster.3h25ap5.mongodb.net/?retryWrites=true&w=majority`
)
.then(() => {
    console.log('Conectado ao MongoDB')
    app.listen(3000)
})
.catch((err) => console.log(err))

