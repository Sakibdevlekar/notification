const dbConfig = require('./configs/db.config')
require("./crons/cron")
const mongoose = require('mongoose')
const express = require('express')
const {NotificationRoutes} = require('./routes/ticketNotification.route')

const app = express()
app.use(express.json())
app.use(NotificationRoutes)

mongoose.connect(dbConfig.DB_URL,
    () => { console.log("Connected to Mongo DB") },
    err => { console.log("Error: ", err.message) }
)


app.listen(8000, () => {
    console.log("Application started on the port num 8000")
})