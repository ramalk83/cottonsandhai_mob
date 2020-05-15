const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../keys')
const router = express.Router();
const User = mongoose.model('User');


router.post('/signup',async (req,res)=>{
  //console.log(req)
  console.log(req.body)
  console.log(req.body.email)
    const {email,password} = req.body;

    try{
      const user = new User({email,password});
      await  user.save();
      const token = jwt.sign({userId:user._id},jwtkey)
      res.send({token})

    }catch(err){
      return res.status(422).send(err.message)
    }  
})

router.post('/signin',async (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).send({error :"must provide email or password"})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(422).send({error :"must provide email or password"})
    }
    try{
      await user.comparePassword(password);    
      const token = jwt.sign({userId:user._id},jwtkey)
      res.send({token})
    }catch(err){
        return res.status(422).send({error :"must provide email or password"})
    }
})


router.post('/addvendor',async (req,res)=>{
  const {companyName,nickName} = req.body
  console.log(companyName)
  console.log(nickName)
  res.send('data received successfully')
})

module.exports = router