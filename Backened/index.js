const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
    
});