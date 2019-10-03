const mongoose = require('mongoose')

const biosModel  = new mongoose.Schema({
    playerid: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('bio', biosModel)