const express = require('express')
var cors = require('cors')

const connectToMongo = require('./db');
connectToMongo();
const app = express()
const port = 4000



app.use(cors())

app.use(express.json())

//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

 app.listen(port, () => {
  console.log(`INoteBook Backened app listening on port ${port}`)
})