const db = require('../db/db')

const Job = {
  create(role, company, close_date, contact, notes, status) {
    const sql = `
      INSERT INTO jobs(role, company, close_date, contact, notes, status)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *
    `
    const jobStatus = checkStatus(status)

    return db.query(sql, [role, company, close_date, contact, notes, jobStatus])
      .then(dbResponse => {
        return dbResponse.rows[0]
      })
  }
}

// check status
function checkStatus(status) {
  if (status === "Incomplete") {
    status = false
  }
  return status
}

module.exports = Job