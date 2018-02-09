//main server code

const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const mustache = require('mustache-express');
const app = express();
const bodyParser = require('body-parser');
const User = require('./user');
const Goal = require('./goalCounter');

mongoose.Promise = require('bluebird');
mongoose.connect = ('mongodb://localhost:3000/viceBreakerDB');

app.use(session({
    secret: 'PORKCHOP SANDWICHES',
    resave: false,
    saveUninitialized: true
}));

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){
    res.render('index');
});

//signup
app.post('/registerNew', function(req, res) {
    User.create({
      username: req.body.username,
      password: req.body.password,
});
    res.render('index', {
      message: "Please Login"
    });
  });
  
  app.post('/registered', function(req, res) {
    res.render('index');
  });

  app.post('/login', function (req, res) { 
    // retrieve the values for username and password
    // that have been posted to you. in the form.
    let username = req.body.name;
    let password = req.body.password;

    // try to find a user (with mongoose) that has that username and password
    User.findOne(
        { name: username, password: password }).then(function (data) {
        if (data !== null) {
            console.log(data);
            // if that user exists, save the user
            // to req.session.
            req.session.user = data;
        } else {
     res.redirect('/');}
    });
});

app.post('/logout', function(req, res) {
    req.session.destroy(function() {
      res.render('index', {
        message: "Goodbye"
      });
    });
  });

app.listen(3000, function(){
    console.log('Server ready to roll at port 3000');

});