const express = require('express')
const router = express.Router()
const bio = require('../models/bios')


//get all stats for a player ID

router.get('/:id', async (req, res) => {

    try{
        const bios = await bio.find({ playerid: req.params.id })
        res.json(bios)
    } catch (err) {
        res.bios(500).json({ message: err.message })
    }

})


module.exports = router