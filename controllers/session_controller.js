const express = require('express')
const bcryptjs = require('bcryptjs')
const router = express.Router()
const User = require('../models/user')


// login
router.post('/', (req, res) => {
   req.session.userId  = 2
   res.json(req.session)
})

router.get('/', (req, res) => {
   res.json(req.session)
})

// logout
router.delete('/', (req, res) => {
   req.session.destroy() // remove/reset the session
   res.json({})
})

module.exports = router

// FROM ALEX check if mine is correct
// const express = require('express');
// const bcrypt = require('bcrypt');
// const router = express.Router();
// // Login
// router.post('/', (req, res) => {
//     req.session.userId = 2;
//     res.json(req.session);
// });
// router.get('/', (req, res) => {
//     res.json(req.session);
// });
// // Logout
// router.delete('/', (req, res) => {
//     req.session = {} // Remove/reset the session
//     res.json({});
// })
// module.exports = router;