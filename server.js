const express = require('express');
const app = express();

const usersController = require('./controllers/users_controller.js');

const port = 4567

app.get('/index.html', (req, res) => res.send('hello'));
app.listen(port, () => console.log(`server listening on port: ${port}`));

// app.use(logger)

// (middleware) builtin mini router for static files
app.use(express.static('client'))

// parse JSON Body to req.body
app.use(express.json())

// routes (middleware)
app.use('/api/users', usersController);

//--handle any errors that are thrown _anywhere_ in the stack of middlewares
//  app.use(errorHandler);