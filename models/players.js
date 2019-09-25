const mongoose = require('mongoose')

const playerList  = new mongoose.Schema({
    namne: {
        type: String,
        required: true
    },
    season: {
        type: Number,
        required: true
    },
    mlb_id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('stat', playerList)