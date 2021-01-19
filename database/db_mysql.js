const mysql = require('mysql');

module.exports.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mysql',
  });

  const createArticleTable = `CREATE TABLE IF NOT EXISTS articles(
    id VARCHAR(40) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    dek VARCHAR(10000) NOT NULL,
    published_date VARCHAR(20) NOT NULL,
    canonical_url VARCHAR(120) NOT NULL,
    word_count INT NOT NULL,
    tags VARCHAR(50) NOT NULL DEFAULT '""',
    embeds INT NULL DEFAULT NULL,
    lead_art VARCHAR(50) NOT NULL,
    authors VARCHAR(100) NOT NULL,

    PRIMARY KEY(id)
    )`

  module.exports.connection.connect((err) => {
    if(err) {
      throw err};
      module.exports.connection.query(createArticleTable, (err, results, fields) => {
      if(err) throw err;
    })
  });