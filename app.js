const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const dotenv = require('dotenv');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// view engine
app.set('view engine', 'ejs');

// dotenv
dotenv.config();

// database connection
const dbURI = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.muz34y3.mongodb.net/node-auth`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/candies', requireAuth, (req, res) => res.render('candies'));
app.get('/contactus', requireAuth, (req, res) => res.render('contactus'));
app.get('/success', (req, res) => res.render('success'));
app.use(authRoutes);
