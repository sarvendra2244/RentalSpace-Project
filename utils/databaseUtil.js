const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'sarvendra2244',
  database: 'airbnb',
  password: '$S123325'
});

module.exports = pool.promise();
