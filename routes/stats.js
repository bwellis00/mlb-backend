const express = require('express')
const router = express.Router()
const stat = require('../models/players')


//get all stats for a player ID

router.get('/:id', async (req, res) => {

    try{
        const stats = await stat.find( { mlb_id: req.params.id })
        res.json(stats)
    } catch (err) {
        res.stats(500).json({ message: err.message})
    }

})


module.exports = router