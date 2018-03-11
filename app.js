const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000, process.env.IP, function(){
  console.log('SERVER IS RUNNING');
});
