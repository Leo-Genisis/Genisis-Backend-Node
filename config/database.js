var mysql = require('mysql');

let connMySQL = function(){
    console.log('Conexão com bd estabelecida');
    return connection = mysql.createConnection({
        hots:'localhost',
        user:'root',
        password:'',
        database:'genisis'
    })
}

module.exports = function(){
    return connMySQL;
}