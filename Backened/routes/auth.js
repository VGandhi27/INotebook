const express = require('express');
const User =require('../models/User');
const router =express.Router(); 
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


const JWT_SECRET = 'Wonderful@Day';

//Create a User using:POST "api/auth/createuser " .Doesn't require Auth -No login required
router.post('/createuser',[
       body('name','Enter a valid name').isLength({min:3}),
       body('email','Enter a valid email').isEmail(),
       body('password','Enter a valid Password').isLength({min:5}),
],async (req,res)=>{
       //if there are errors , return bad request and the errors
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
       }
       //Check whether with this email exists already
       try {
              
       
       let user = await User.findOne({email: req.body.email});
       if(user){
              return res.status(400).json({error:"Sorry a user with this email already exists "})
       }
       const salt = await bcrypt.genSalt(10);
       const secPass= await bcrypt.hash(req.body.password,salt) ; 
       //Create a new User
       user = await User.create({
              name: req.body.name,
              password: secPass,
              email: req.body.email,
            })
            
         const data={
              user:{
                     id: user.id
              }
              
         }    
         const autoken= jwt.sign(data ,JWT_SECRET);
        
         res.json({autoken});
           // res.send(req.body);
              // res.json({user})
              } catch (error) {
              console.error(error.message)
              res.status(500).send("Some error occured ")
              } 

       })


module.exports = router