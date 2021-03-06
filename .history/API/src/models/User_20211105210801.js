const mongoose = require('mongoose')
const validate = require('validator')

const UsersSchema = new mongoose.Schema({
    name : {
        type : 'string',
        required : true,

    } , 
    email : {
         type : 'string',
         required : true,
         unique : true,
    } , 
    password : {
         type : 'string',
         required : true,
         unique : true,
    } , 
    date : {
         type : 'Date',
         default : Date.now
    }
})


module.exports = mongoose.model('User' , UsersSchema) // Cnverting the schema into model //
