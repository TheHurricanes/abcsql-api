require('dotenv').config();
require('./db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const users = require('./routes/users');

const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', users);

app.listen(port, () => {
  console.log('> Listening on port ' + port);
});
