const express = require('express');
const User = require('../models/user');
const validateUser = require('../middlewares/users/validate_user')

const router = express.Router();

router.post('/', validateUser, (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  User.create(name, email, password)
    .then(user => { // variable "user" here ends up as whatever is the last thing returned
      // from the "promise chain" in the `User.create` method
      res.json({
        user: user,
        message: 'created user successfully'
      })
    });
})

module.exports = router;
