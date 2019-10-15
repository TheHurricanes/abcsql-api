const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_DB_NAME } = process.env;

mongoose.connect(
  `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
);

mongoose.connection.on('connected', () => {
  console.log('> Connected to database');
});

mongoose.connection.on('error', err => {
  console.log('> Database error: ' + err);
});
