const Todo = require('../model/todoModel');
const mongoose = require('mongoose');

exports.addTodo = (req, res, next) => {
    const todo = new Todo({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        completed: req.body.completed
    });

    todo.save()
        .then(result => {
            return res.status(200).json({
                data: result
            });
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
};

exports.getAllTodo = (req, res, next) => {
    Todo.find()
        .select('-__v')
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
};

exports.deleteTodo = (req, res, next) => {
    const id = req.params.id;
    Todo.remove({_id: id})
        .exec()
        .then(() => {
            return res.status(200).json({
                message: 'Deleted Successfully'
            });
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
};

exports.getTodoById = (req, res, next) => {
    const id = req.params.id;

    Todo.findById(id)
        .select('-__v')
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
};