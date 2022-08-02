const express = require("express")

const app = express()

const router = express.Router()

router.get('/', (req, res) => {
    res.send('latest posts here')
})

router.get('/articles', (req, res) => {
    res.send('Articles here')
})

router.get('/news', (req, res) => {
    res.send('News here')
})

module.exports = router