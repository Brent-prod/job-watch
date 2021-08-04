if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const express = require('express');
const app = express();
const session = require('express-session');

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  saveUninitialized: false,
  resave: false,
}

if (process.env.NODE_ENV === 'production') {
  sessionConfig.cookie.secure = true
}

const port = process.env.PORT || 4567;

const errorHandler = require('./middlewares/error_handler');

const jobsController = require('./controllers/jobs_controller.js');
const usersController = require('./controllers/users_controller.js');
const sessionsController = require('./controllers/sessions_controller')

app.set('view engine', 'ejs')
app.use(express.json());
app.use('/api/jobs', jobsController);

app.use(express.static('client'));
app.use('/api/users', usersController);

app.use(session(sessionConfig));
app.use('/api/sessions', sessionsController)

app.get('/jobs/:id',  (req, res) => res.render('edit_job'))
// app.use(logger)
app.get('/index.html', (req, res) => res.send('hello'));
app.listen(port, () => console.log(`server listening on port: ${port}`));

//--handle any errors that are thrown _anywhere_ in the stack of middlewares
app.use(errorHandler);
