const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'memo',
    user: 'test',
    password: 'test',
});

app.get('/', (req, res) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
    const sql = `
        SELECT
            id
            , title
            , detail
            , user_id
        FROM
            memo.t_memos;
    `;
    connection.query(sql, (error, results) => {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
});

module.exports = {
    path: '/api/memo',
    handler: app
}