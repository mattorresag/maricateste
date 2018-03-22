var express = require('express');
var load = require('express-load');
var path = require('path');
var axios = require('axios');


module.exports = function() {

    var app = express();

    app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
	});

	app.set('views', path.join("./app/", 'views'));
	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html');
    app.use(express.static("app/js"));

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
};