require('dotenv').config();
require('./db');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const users = require('./routes/users');
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', users);

app.listen(port, () => {
  console.log('> Listening on port ' + port);
});
