const bodyParser = require('body-parser');
var express = require('express');
var consign = require('consign');
var app = express();
var cors = require('cors');

app.set('view engine', 'ejs');

app.set('views', './views')

app.use(bodyParser.urlencoded({extended:true}));

app.use(cors())
consign()
.include('/routes')
.then('/config/database.js')
.then('/models')
.into(app);

module.exports = app;

//server.listen(3002);
//console.log("servidor ativo!");