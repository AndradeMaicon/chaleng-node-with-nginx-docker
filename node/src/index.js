const express = require('express');
const mysql = require('mysql');

const createRegisters = require('./createRegisters');
const readRegisters = require('./readRegisters');

const app = express();

const port = 8080;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const connection = mysql.createConnection(config);

let nameList = [];

createRegisters(connection)
  .then(() => readRegisters(connection))
  .then((list) => {
    list.map(i => nameList.push(i))
  })
  .then(() => connection.end());


app.get('/', (req, res) => {
  res.send(
    `<h1>Full Cycle Rocks!</h1><div><ul>${nameList.join('')}</ul></div>`
  )
})

app.listen(port, () => {})