const express = require('express')
const app = express()
const port = process.env.port || 8989
app.get('/', (req, res) => {
    res.send(" Server ")
})
app.listen(port,
    console.log("connected"))