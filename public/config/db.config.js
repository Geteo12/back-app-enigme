var mysql = require('mysql');
console.log('Get connection ...');
var conn = mysql.createConnection({
  database: 'db_app_enigme',
  host: "localhost",
  user: "root",
  password: "root",
  
});
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});