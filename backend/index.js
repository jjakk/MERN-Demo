const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

//Routers
const exercisesRouter = require('./routers/exercises.js');
const usersRouter = require('./routers/users.js');

app.use('/exercises', exercisesRouter);
app.use('users', usersRouter);

app.listen(() => {
  console.log(`Running on port ${port}`);
}, port);
