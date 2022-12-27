const express = require('express');
const app = express();
const taskRouter = require('./routes/task');
const connectDb = require('./db/connect')

//middlewares
app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/task' , taskRouter)





//routes set up

app.get(`/login`,(req,res)=>{
    res.send('page works!')
})

//setting up mongoose
const port  = 3000;

const start = async ()=>{
    try{
        await connectDb();
        app.listen(port,console.log(`port listening on port ${port}`))
    }catch(err){
        console.log(err)
    }
}

start()


