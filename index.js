const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('A maria sarna de mais')
})

app.listen(port, () => {
    console.info(`Aplicação rodando em http://localhost:${port}`)
})
