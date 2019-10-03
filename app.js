require('dotenv').config()

const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5500;

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())
app.use(cors());

const statsRouter = require('./routes/stats')
const biosRouter = require('./routes/bios')

app.use('/stats', statsRouter)
app.use('/bios', biosRouter)



app.listen(PORT, () => console.log('server started'))