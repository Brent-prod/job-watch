const express = require('express');
const User = require('../models/user');
const validateUser = require('../middlewares/users/validate_user')
const {createSession} = require('../helpers/sessions_helper')

const router = express.Router();

router.post('/', validateUser, (req, res) => {
  User.createUser(
      req.body.name,
      req.body.email,
      req.body.password,
  ).then(successResponse => {
    // this logs the user in automatically after signing up
      createSession(req, successResponse);
      res.json(successResponse);
  })
  .catch(err => {
    res.json(err.response.data.error)
  })
})

module.exports = router;
