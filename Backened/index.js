const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1/login', (req, res) => {
    res.send('Hello Login!')
  })

app.get('/api/v1/register', (req, res) => {
    res.send('Hello Register!')
  })

 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})