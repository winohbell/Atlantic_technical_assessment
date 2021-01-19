const mysql = require('mysql');

module.exports.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mysql',
  });


  module.exports.connection.connect((err) => {
      debugger;
    if(err) {
      throw err};
  });