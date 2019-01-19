const express = require('express');
const router = express.Router();
const todoController = require('../controller/todoController');

// Add a new TodoData
router.post('/todo', todoController.addTodo);

// Get all the TodoData
router.get('/todo', todoController.getAllTodo);

// Remove a TodoData by _id
router.delete('/:id', todoController.deleteTodo);

//Get a single TodoData by Id
router.get('/:id', todoController.getTodoById);

module.exports = router;
