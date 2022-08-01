const express = require('express')
const app = express()
const usersRouters = require('./routes/users')

app.get('/', ((req, res) => {
    res.render('index')
}))



app.set('view engine', 'ejs')

app.use('/users', usersRouters)

app.listen(5000)