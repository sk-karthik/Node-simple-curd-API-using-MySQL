'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'captcha'
});

connection.connect(function(err) {
    if (err) res.json(err);
});

module.exports = connection;