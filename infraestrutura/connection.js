const mysql = require('mysql')

const conection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'sistemaclientes'
})

module.exports = conection