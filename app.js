//main server code

const express = require('express');
const mustache = require('mustache-express');
const app = express();

app.engine('mustache', mustache());
app.set('view engine', 'mustache');

app.get('/', function (req, res){
    res.render('index');
});

app.listen(3000, function(){
    console.log('Server ready to roll at port 3000');

});