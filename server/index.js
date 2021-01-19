const express = require('express');
const mysql = require('mysql');
const db = require('../database/db_mysql.js');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});