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


/*
let createArtTable = `CREATE TABLE IF NOT EXISTS arts(
    id INT NOT NULL PRIMARY KEY,
    type VARCHAR(50) NOT NULL
  )`

let createAuthorTable = `CREATE TABLE IF NOT EXIST authors(
    id INT NOT NULL PRIMARY KEY,
    slug VARCHAR(30) NOT NULL 
  )`

let createArticleTable = `CREATE TABLE IF NOT EXISTS articles(
    id VARCHAR(40) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    dek VARCHAR(10000) NOT NULL,
    published_date VARCHAR(20) NOT NULL,
    canonical_url VARCHAR(120) NOT NULL,
    word_count INT NOT NULL,
    tags VARCHAR(50) NOT NULL DEFAULT '""',
    embeds INT NULL DEFAULT NULL,
    lead_art INT NOT NULL,
    authors INT NOT NULL,

    PRIMARY KEY(id)
    FOREIGN KEY(art) REFERENCES arts(id)
    FOREIGN KEY(author) REFERENCES authors(id) ->only allow one author now, need to improve
  )`
  */

  //to allow articles have multiple authors, intersection table is needed. reference: https://stackoverflow.com/questions/37825685/foreign-key-referring-to-multiple-rows-in-another-table