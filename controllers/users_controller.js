const express = require('express');
const User = require('../models/user');
const validateUser = require('../middlewares/users/validate_user')

const router = express.Router();

// this is from Alex's codeAlong
router.post('/', (req, res) => {
  // console.log(req.body)
  User.createUser(
      req.body.name,
      req.body.email,
      req.body.password,
  ).then(user => {
      res.json(user);
  });
})

// this was my version
// router.post('/', validateUser, (req, res) => {
//   const name = req.body.name
//   const email = req.body.email
//   const password = req.body.password_digest

//   User.createUser(name, email, password)
//     .then(user => { 
//       res.json({
//         user: user,
//         message: 'created user successfully'
//       })
//     });
// })

module.exports = router;
