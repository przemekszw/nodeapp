const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: 'Please enter your email',
    },
    position:{
        type:String,
        required: 'Please enter your position',
    },
    date:{
        type:Date,
        required: 'Please enter date ',

    },
    gender:String,
    status:String,
    
})

const Userdb = mongoose.model('userdb',schema)

module.exports = Userdb
