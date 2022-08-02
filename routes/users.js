
const express = require('express')
const router = express.Router()
router.use(logger)

router.get('/', (req, res) => {
    res.send('Users list')
})

router.get('/new', (req, res) => {
    res.send('hello')
})

router.post('/', (req, res) => {
    res.send('New User')
})

router.route('/:id')
.get((req, res) => {
    res.send(`Get user with ${req.params.id}`)
})
.put((req, res) => {
    res.send(`Update user with ${req.params.id}`)
})
.delete((req, res) => {
    res.send(`Delete user with ${req.params.id}`)
})

function logger(req, res, next){
    console.log(req.originalUrl);
    next()
}



module.exports = router