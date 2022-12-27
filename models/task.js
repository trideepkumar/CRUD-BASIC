const  mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide a name'],
        trim:true,
        maxlength:[7,'max length must be 7 characters!!'],
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('task',TaskSchema)