const { Pool, Client } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'simulasi-livecode2',
  password: 'Dila_99118',
  port: 5432,
});

module.exports = pool;
