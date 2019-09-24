require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const statsRouter = require('./routes/stats')
app.use('/stats', statsRouter)


app.listen(PORT, () => console.log('server started'))