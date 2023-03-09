const express = require('express')
const mysql = require('mysql2')
const path = require('path')
const server = express()

const db = mysql.createPool({
    host: 'localhost',
    user: "root",
    database: 'gamesdb',
    //port: '3307'
})

console.log(db);

server.use(express.static(path.resolve('public')))

server.get('/api/games', (req, res) => {
    db.query('SELECT * FROM games', (err, rows) => {
        if (err) throw err.message
        res.status(200).json(rows)
    })
})




server.listen(3000)