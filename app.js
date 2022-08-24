const { text } = require('express');
const express = require('express');
const fs = require('fs');
const app = express()
var path = require('path');
const port = 3000

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

const mysql = require('mysql')

const con = mysql.createConnection({
	host: '127.0.0.1',
	port: '3306',
	user: 'root',
	password: 'admin',
	database: 'board'
});

con.connect(err => {
	if (err) {
    console.log("MySQL 연결 실패 : ", err)
  } else {
    console.log("MySQL Connected!!!");
  };
})

app.get('/', (req, res) => {
    fs.readFile('views/main.html', function (error, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    })
})

app.get('/main.html', (req, res) => {
  fs.readFile('views/main.html', function (error, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  })
})

app.get('/write.html', (req, res) => {
  fs.readFile('views/write.html', function (error, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  })
})

app.post('/board', (req, res) => {
  console.log(req.body);
  const result = req.body;
  con.query('INSERT INTO BOARD(writer, title, contents) VALUES ( ?, ?, ? );'
                      , [result.writer, result.title, result.contents]
                      , function (error, results, fields) {
        con.end();
  }); 
  res.send("ok");
})

app.get('/board', (req, res) => {
  const sql = "SELECT id, writer, title, created_time FROM BOARD";
  con.query(sql, function(err, results, fields) {
    res.send(results);
  });
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})