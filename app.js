const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/login', (req, res) => {
    let name = req.body.name
    res.cookie('name', name)
    res.send()
})

app.get('/hello', (req, res) => {
    res.send({message: 'Welcome '+req.cookies.name+'!'})
})


const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))