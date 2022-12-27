
const Task = require('../models/task')


const getAlltasks = async (req,res)=>{
  try{
      const tasks = await Task.find({});
      res.status(200).json({tasks})
  }catch(err){
    res.json(err);
  }
}

const createTask = async (req,res)=>{
    console.log((req.body));
    try{
    const task = await Task.create(req.body);
    res.status(201).json({task});
}catch(err){
    res.status(500).json({msg:err})
}
}

const getTask = async (req,res)=>{
   const {id:taskID} = req.params
   const task = await Task.findOne({name:'trideep'});
   if(!task){
    return res.status(500,{msg:`no task with this :${taskID}`})
   }
   res.status(200).json({task})
}

const updateTask = async(req,res)=>{
    console.log('update one works!!')
    const {id} =req.params
    console.log(req.params)
    const task = await Task.findByIdAndUpdate({_id:id} , {$set: {name: req.body.name}})
    
     if(!task){
       return res.status(404,{msg:`no task with this :${id}`})
     }else{
              res.json({task})
     }
}


const deleteTask = async (req,res)=>{
    const {id:taskID} = req.params
   const task = await Task.findOneAndDelete({_id:taskID});
   if(!task){
    return res.status(500,{msg:`no task with this :${taskID}`})
   }
   res.status(200).json({task})

}



module.exports = {
    getAlltasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}