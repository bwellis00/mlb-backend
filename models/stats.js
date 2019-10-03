const mongoose = require('mongoose')

const statsModel  = new mongoose.Schema({
    playerid: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('stat', statsModel)