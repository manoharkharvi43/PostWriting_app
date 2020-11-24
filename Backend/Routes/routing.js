const express = require('express')
const mongoose = require('mongoose')
const route = express.Router()
const posts = require('../scheme/scheme')




route.get('/allposts',(req,res) =>{
  posts.find({}).then(data=>{
res.send(data)})
.catch(err =>{
  console.log(err)
})
})

route.post('/createpost',async(req,res)=>{
   const user = new posts({
       title :req.body.title,
       content :req.body.content

   });
   try{
       const save_user = await user.save();
       res.json(save_user)

   }
   catch(err){
     res.send({message:err});
     res.body.send(err)
   }

})

module.exports = route