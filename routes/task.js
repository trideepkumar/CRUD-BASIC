const express = require('express');
const router =  express.Router();
const {getAlltasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/task')

router.get(`/`, getAlltasks);



router.post('/create', createTask);

router.get('/:id', getTask);

router.patch('/:id',updateTask);

router.delete('/:id', deleteTask);



module.exports = router ;