const express = require('express');
require('dotenv').config();

const connectDB = require('./db/connect');

const app = express();
const port = process.env.PORT || 8080;

connectDB();

app.use(express.json());

// Routes
app.use('/', require('./routes'));

app.get('/', (req, res) => {
  res.send('Homeschool API is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});