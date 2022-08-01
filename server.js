const express = require('express')
const app = express()

app.get('/', ((req, res) => {
    res.render('index')
}))

app.set('view engine', 'ejs')

app.get('/members', ((req, res) => {
    res.json({members: {
        member1: {
            name: "Anass",
            age: 18
        },
        member2: {
            name: "Ibrahim",
            age: 25
        }
    }})
}))


app.listen(5000)