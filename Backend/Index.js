const express = require('express')
const mongoose = require('mongoose')
const routes = require('./Routes/routing')
const app = express()
url='mongodb+srv://user43:user43@cluster44.lcqv6.mongodb.net/Posts?retryWrites=true&w=majority'

const port = 4000
 mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true},()=>{
     console.log('connected to the database')
 })

 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.use(express.json())
app.use('/', routes)


app.listen(port)