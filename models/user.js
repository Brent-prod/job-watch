const bcryptjs = require('bcryptjs');
const db = require('../db/db');

const User = {
	createUser(name, email, password) {

		const password_digest = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));

		const sql = `INSERT INTO users(name, email, password_digest)
      VALUES($1, $2, $3)
      RETURNING *`;

		return db.query(sql, [name, email, password_digest])
			.then((dbResponse) => {
				return dbResponse.rows[0];
		});
	},
	findByEmail(email) {
		const sql = `SELECT * FROM users
            WHERE email = $1`

		return db.query(sql, [email])
			.then(dbResponse => {
				return dbResponse.rows[0]
			});
	},
	
	findByName(id) {
		const sql = `SELECT name FROM users
            WHERE id = $1`

		return db.query(sql, [id])
			.then(dbResponse => {
				console.log(dbResponse.rows[0])
				return dbResponse.rows[0]
			});
	}
};

module.exports = User;
