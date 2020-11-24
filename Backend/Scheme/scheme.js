const mongoose = require('mongoose')

const allscheme = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:Date.now
    },
});

module.exports  = mongoose.model('posts' , allscheme)