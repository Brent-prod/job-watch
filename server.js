const express = require('express');
const app = express();

const port = 4567

app.get('/', (req, res) => res.send('hello'));
app.listen(port, () => console.log(`server listening on port: ${port}`));

app.use(express.static('client'))