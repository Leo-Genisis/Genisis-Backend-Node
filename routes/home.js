module.exports = function(app){

    app.get('/', function(req,res){
        let connection = app.config.database();
        var query = app.models.conteudoModel;
        query.getConteudo(connection,
         function(error,results,fields){
            console.log(error,results)
            res.json(results)
        });

        //query.on('error', function(error){
            //console.log("[mysql error:]", error);
        //});
        
    });
}