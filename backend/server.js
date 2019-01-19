const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoute = require('./api/routes/todo');
const url = 'mongodb://localhost:27017/todoDB';

mongoose.connect(url, {
    useNewUrlParser: true
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(logger('tiny'));

app.use('/', todoRoute);

app.use((req, res, next) => {
    const error = new Error('API Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;