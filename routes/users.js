
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Users list')
})

router.get('/new', (req, res) => {
    res.send('Users new form')
})

module.exports = router