module. exports = function(app) {
    app.get("/produtos", function(req, res) {

    var connection = app.infra.connectionFactory;
    var produtosBanco = new app.infra.ProdutosDAO(connection);	

    produtosBanco.lista(function(erros, resultado){
        res.render('produtos/lista',{lista: resultado});

        });

        connection.end();
     });
}
