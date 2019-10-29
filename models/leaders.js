const mongoose = require('mongoose')

const statsModel  = new mongoose.Schema({
    Season: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('stat', statsModel)