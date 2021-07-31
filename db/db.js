const pg = require('pg')

const db = new pg.Pool({
  database: 'jobwatch',
  password: process.env.DB_PASS
})

module.exports = db