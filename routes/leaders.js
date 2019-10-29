const express = require('express')
const router = express.Router()
const stat = require('../models/stats')


//get all stats for a player ID

router.get('/:id', async (req, res) => {

    try{
        let id = parseInt(req.params.id)
        const stats = await stat.find({ Season: id }).sort({ Season: 1 })
        res.json(stats)
    } catch (err) {
        res.stats(500).json({ message: err.message })
    }

})


module.exports = router