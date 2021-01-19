createArticleTable = `CREATE TABLE IF NOT EXISTS articles(
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
    );`


//improved schema design - 3 tables
/*
let createArtTable = `CREATE TABLE IF NOT EXISTS arts(

  )`

let createAuthorTable = `CREATE TABLE IF NOT EXIST authors(

  )`

let createArticleTable = `CREATE TABLE IF NOT EXISTS articles(

  )`
  */
