const db = require('../db/db')

const Job = {
  create(role, company, link, close_date, contact, notes, status) {
    const sql = `
      INSERT INTO jobs(role, company, link, close_date, contact, notes, status)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `
    return db.query(sql, [role, company, link, close_date, contact, notes, status])
      .then(dbResponse => {
        return dbResponse.rows[0]
      })
  },

  findAll() {
    const sql = "SELECT * FROM jobs"
    return db.query(sql)
      .then(dbRes => dbRes.rows)
  },

  edit(role, company, link, close_date, contact, notes, status, id) {
    const sql = `
    UPDATE jobs
    SET role = $1,
        company = $2,
        link = $3
        close_date = $4,
        contact = $5,
        notes = $6,
        status = $7
    WHERE id = $8
    RETURNING *
    `
    return db.query(sql, [role, company, link, close_date, contact, notes, status, id])
      .then(dbResponse => {
        return dbResponse.rows[0]
      })
  },

  findJobById(id) {
    const sql = `
    SELECT * FROM jobs
    WHERE id = $1
    `
    return db.query(sql, [id])
      .then(dbResponse => {
        return dbResponse.rows[0]
      })
  }
}


module.exports = Job