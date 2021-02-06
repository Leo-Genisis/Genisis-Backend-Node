var app = require('./config/server');

var rotaHome = require('./routes/home')(app);
var rotHome = require('./routes/serv')(app);

app.listen(3002, function(){
    console.log('Servidor ativo')
});