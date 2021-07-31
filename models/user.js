const bcryptjs = require('bcryptjs');
const db = require('../db/db');

const User = {
	create(name, email, password) {
		const password_digest = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));

		const sql = `
      INSERT INTO users(name, email, password_digest)
      VALUES($1, $2, $3)
      RETURNING *
    `;
		return db.query(sql, [ name, email, password_digest ]).then((dbResponse) => {
			return dbResponse.rows[0];
		});
	}
};

module.exports = User;
