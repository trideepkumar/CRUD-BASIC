const { url } = require('inspector');
const mongoose = require('mongoose');

const connectionstring = 'mongodb://localhost:27017/nodeproject';


const connectDb =(url)=>{
    return mongoose.connect(connectionstring)
    .then(()=>{
    console.log('successfully connected!!');
}).catch((err) =>{
    console.log(err);
})
}

module.exports = connectDb;
