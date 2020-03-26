// This will load all our environment variables from the .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to database'));

// Middleware
app.use(express.json());

const subscribersRouter = require('./routes/subscribers');

// This will use 'localhost:3000/subscribers'
app.use('/subscribers', subscribersRouter);

PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
