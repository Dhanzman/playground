const express = require('express')
const bodyParser = require('body-parser')
const port = 8080
const app = express()


app.

app.use('/', (req, res) => {
    res.send('what are you doing')
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})