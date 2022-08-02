const express = require('express')
const app = express()
const usersRouters = require('./routes/users')
const postsRouter = require('./routes/posts')

app.use(express.static("public"))

app.set('view engine', 'ejs')

app.use('/users', usersRouters)
app.use('/posts', postsRouter)

app.listen(5000)