const mysql = require('mysql');
const createArticleTable = require('./db_schema.js');

module.exports.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mysql',
  });


  module.exports.connection.connect((err) => {
    if(err) {
      throw err};
      module.exports.connection.query(createArticleTable, (err, results, fields) => {
      if(err) throw err;
    })
  });