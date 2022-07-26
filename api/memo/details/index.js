const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'memo',
    user: 'test',
    password: 'test',
});

app.get('/:id', (req, res) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
    const sql = `
        SELECT
            id
            , title
            , detail
            , user_id
            , is_deteled
        FROM
            memo.t_memos
        WHERE
            id = ?
            AND is_deteled = ?;
    `;
    connection.query(sql, [req.params.id, 0], (error, results) => {
        if (error) {
            console.log(error);
        }
        res.send(results[0]);
    });
});

app.post('/update', (req, res) => {
    const memo = req.body.memo;

    res.set({ 'Access-Control-Allow-Origin': '*' });
    
    const sql = `
        UPDATE
            memo.t_memos
        SET
            title = ?,
            detail = ?
        WHERE
            id = ?;
    `;
    connection.query(sql, [memo.title, memo.detail, memo.id], (error, results) => {
        if (error) {
            console.log(error);
        }
        res.send(results[0]);
    });
});

module.exports = {
    path: '/api/memo/details',
    handler: app
}