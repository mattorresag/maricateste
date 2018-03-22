var express= require('express');

module. exports = function(app) {
	app.get('/mapa',function(req,res){
	    res.render("produtos/site");
	})
}