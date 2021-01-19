const express = require('express');
const mysql = require('mysql');
const db = require('../database/db_mysql.js');
const bodyparser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyparser.json());

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

app.post('/api/articleUpload', (req, res) => {
    let data =  req.body.article;

    //MySQL queries
    let getIdInfo = `SELECT * FROM articles WHERE id="${data.id}";`;
    let getUrlInfo = `SELECT * FROM articles WHERE canonical_url="${data.canonical_url}"`
    let inputArticle = `
    INSERT INTO articles (id, slug, title, dek, published_date, canonical_url, word_count, tags, embeds, lead_art, authors) 
    VALUES ("${data.id}", "${data.slug}", "${data.title}", "${data.dek}", "${data.published_date}", "${data.canonical_url}", ${data.word_count}, "${data.tags}", ${data.embeds}, '${JSON.stringify(data.lead_art)}', '${JSON.stringify(data.authors)}');
    `
    let updateArticle = `
    INSERT INTO articles (id, slug, title, dek, published_date, canonical_url, word_count, tags, embeds, lead_art, authors) 
    VALUES ("${data.id}", "${data.slug}", "${data.title}", "${data.dek}", "${data.published_date}", "${data.canonical_url}", ${data.word_count}, "${data.tags}", ${data.embeds}, '${JSON.stringify(data.lead_art)}', '${JSON.stringify(data.authors)}')
    ON DUPLICATE KEY UPDATE 
    slug = "${data.slug}",
    title = "${data.title}", 
    dek = "${data.dek}", 
    published_date = "${data.published_date}", 
    canonical_url = "${data.canonical_url}", 
    word_count = ${data.word_count}, 
    tags = "${data.tags}", 
    embeds = ${data.embeds}, 
    lead_art = '${JSON.stringify(data.lead_art)}', 
    authors = '${JSON.stringify(data.authors)}';
    `
    //id and url status
    let idRepeat = false;
    let urlRepeat = false;

    //check repeat id or url, then return result through res
    db.connection.query(getIdInfo, (err, results) => {
        if(err) {
            throw err;
        } else {
            if(results.lenth > 0) {
                idRepeat = true
            }
            db.connection.query(getUrlInfo, (err, results) => {
                if(err) {
                    throw err;
                } else {
                    if(results.length > 0) {
                        urlRepeat = true
                    }
                    if (!idRepeat && !urlRepeat) {
                        db.connection.query(inputArticle, (err, results) => {
                            if(err) {
                            throw err;
                            } else {
                            res.send('input article success')
                            }
                        })
                    } else if (idRepeat && urlRepeat) {
                        db.connection.query(updateArticle, (err, results) => {
                            if(err) {
                            throw err;
                            } else {
                            res.send('update article success')
                            }
                        })
                    } else if (idRepeat) {
                        res.send('you have new cononical url but repeated id')
                    } else if (urlRepeat) {
                        res.send('you have new id but repeated cononical url')
                    }
                }
            });
        }
    });
    
})