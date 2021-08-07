const express = require('express');
const User = require('../models/user');
const validateUser = require('../middlewares/users/validate_user')

const router = express.Router();

router.post('/', (req, res) => {
  User.createUser(
      req.body.name,
      req.body.email,
      req.body.password,
  ).then(user => {
      res.json(user);
  });
})

module.exports = router;
