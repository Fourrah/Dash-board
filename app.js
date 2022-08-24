const { text } = require('express');
const express = require('express');
const fs = require('fs');
const app = express()
var path = require('path');
const port = 3000

app.use(express.static('public'));

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})