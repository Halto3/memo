const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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
            memo.t_memos
        WHERE
            is_deteled = ?;
    `;
    connection.query(sql, [0], (error, results) => {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
});

app.post('/register', (req, res) => {
    const memo = req.body.memo;

    res.set({ 'Access-Control-Allow-Origin': '*' });
    
    const sql = `
        INSERT INTO memo.t_memos
        (
            title,
            detail,
            user_id,
            is_deteled
        )VALUES
        (
            ?,
            ?,
            ?,
            ?
        );
    `;
    connection.query(sql, [memo.title, memo.detail, 0, 0], (error, results) => {
        if (error) {
            console.log(error);
        }
        res.send(results[0]);
    });
});

app.post('/delete', (req, res) => {
    const id = req.body.id;

    res.set({ 'Access-Control-Allow-Origin': '*' });
    
    const sqlDelete = `
        UPDATE
            memo.t_memos
        SET
            is_deteled = ?
        WHERE
            id = ?;
    `;
    connection.query(sqlDelete, [1, id], (error, results) => {
        if (error) {
            console.log(error);
        }
        // res.send(results[0]);
    });

    const sqlSelect = `
        SELECT
            id
            , title
            , detail
            , user_id
        FROM
            memo.t_memos
        WHERE
            is_deteled = ?;
    `;
    connection.query(sqlSelect, [0], (error, results) => {
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