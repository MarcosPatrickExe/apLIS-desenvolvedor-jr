const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root2',
    password: 'aplis_12345',
    database: 'pacientes_aplis',
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool;