var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db;

if(process.env.ENV == 'Test') {
    db = mongoose.connect('mongodb://localhost/bookAPI_test');   
}
else {
    db = mongoose.connect('mongodb://localhost/bookAPI');
}

var Book = require('./_models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

bookRouter = require('./_routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);

app.get('/', function(req, res) {
    res.send('welcome to my first api');
});

app.listen(port, function() {
    console.log('gulp up and running: ' + port);
});

module.exports = app;