if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express');
const app = express();
const session = require('express-session')

// const sess = {
//   secret: process.env.SESSION_SECRET,
//   cookie : {}
// }

// if (process.env.NODE_ENV === 'production') {
//   sess.cookie.secure = true
// }

const port = process.env.PORT || 4567

const errorHandler = require('./middlewares/error_handler')

const jobsController = require('./controllers/jobs_controller.js')

app.listen(port, () => console.log(`server listening on port: ${port}`));

app.use(express.static('client'))
app.use(express.json())
app.use('/api/jobs', jobsController)
app.use(errorHandler)
// app.use(session(sess)) // adds a req.session body


// app.get('/', (req, res) => {
//   req.session
//   req.session.userId = user.id
// });

// app.get('/login', (req, res) => {
//   req.session
//   if (/*user and password match*/) {
//     req.session.userId = user.id
//   }
//   if (req.session.userId) {

//   }
// })