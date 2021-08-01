if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const express = require('express');
const app = express();
const session = require('express-session');


// const sess = {
//   secret: process.env.SESSION_SECRET,
//   cookie : {}
// }

// if (process.env.NODE_ENV === 'production') {
//   sess.cookie.secure = true
// }

const port = process.env.PORT || 4567;

const errorHandler = require('./middlewares/error_handler');

const jobsController = require('./controllers/jobs_controller.js');
const usersController = require('./controllers/users_controller.js');

app.set('view engine', 'ejs')
app.use(express.json());
app.use('/api/jobs', jobsController);
app.use(errorHandler);
app.use(express.static('client'));
app.use('/api/users', usersController);
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

app.get('/index.html', (req, res) => res.send('hello'))
app.listen(port, () => console.log(`server listening on port: ${port}`))
app.get('/jobs/:id',  (req, res) => res.render('edit_job'))
// app.use(logger)

// (middleware) builtin mini router for static files

// parse JSON Body to req.body

// routes (middleware)

//--handle any errors that are thrown _anywhere_ in the stack of middlewares
//  app.use(errorHandler);
