require('dotenv').config();

const express = require('express');
const session = require('express-session');
const { MongoStore } = require('connect-mongo');
const passport = require('./passport');


const connectDB = require('./db/connect');

const app = express();
const port = process.env.PORT || 8080;

connectDB();

// Needed when the application is deployed on Render
app.set('trust proxy', 1);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI
    }),
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes'));

app.get('/', (req, res) => {
  res.send('Homeschool API is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});