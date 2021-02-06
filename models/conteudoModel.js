module.exports = function(){

    this.getConteudo = function(connection, callback){
        connection.query('SELECT * FROM servicos', callback);
    }

    this.getConteudoServ = function(connection, callback){
        connection.query('SELECT * FROM servicos WHERE idserv', callback);
    }

    return this;
    
}