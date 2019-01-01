var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./_models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req, res) {
        Book.find(function(err, books) {
            if(err) {
                res.status(500).send(err);      
            }
            else {
                res.json(books);
            }
        })
    });

app.use('/api', bookRouter);

app.get('/', function(req, res) {
    res.send('welcome to my first api');
});

app.listen(port, function() {
    console.log('gulp up and running: ' + port);
});


