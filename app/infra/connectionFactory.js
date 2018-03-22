var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'LOL739218',
                database:'casadocodigo'
          });

}

module.exports = function(){
    return createDBConnection();
}