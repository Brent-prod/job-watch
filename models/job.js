const db = require('../db/db')

const Job = {
  create(role, company, close_date, contact, notes, status) {
    const sql = `
      INSERT INTO jobs(role, company, close_date, contact, notes, status)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *
    `
    return db.query(sql, [role, company, close_date, contact, notes, status])
      .then(dbResponse => {
        return dbResponse.rows[0]
      })
  },

  findAll() {
    const sql = "SELECT * FROM jobs"
    return db.query(sql)
      .then(dbRes => dbRes.rows)
  },

  edit(role, company, close_date, contact, notes, status, id) {
    const sql = `
    UPDATE jobs
    SET role = $1,
        company = $2,
        close_date = $3,
        contact = $4,
        notes = $5,
        status = $6
    WHERE id = $7
    RETURNING *
    `
    return db.query(sql, [role, company, close_date, contact, notes, status, id])
      .then(dbResponse => {
        return dbResponse.rows[0]
      })
  }
}


module.exports = Job