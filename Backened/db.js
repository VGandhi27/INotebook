 const { default: mongoose } = require('mongoose');
 
 
 const moongoose=require('mongoose');
 
 
//  const mongoURI ="mongodb://localhost:27017/inotebook"
 const mongoURI ="mongodb+srv://curiousvidushi27:Veenukush@cluster0.pa9g6yx.mongodb.net/?retryWrites=true&w=majority"
  

 const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully");
    })
 }

 module.exports = connectToMongo;
