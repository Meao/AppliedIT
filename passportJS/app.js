const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'kfkydr',
    store: new FileStore(),
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    },
    resave: false,
    saveUninitialized: false,
  })
);

require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  console.log(req.session);
  res.send('Hey! This is done using the tutorial: https://youtu.be/LDnwNtWIq_4');
});

app.post('/login', (req, res, next) => {
  passport.authenticate('local', function(err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send('Please check your credentials and try again.');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/admin');
    });
  })(req, res, next);
});

const auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.redirect('/');
  }
};

app.get('/admin', auth, (req, res) => {
  res.send("You're in the army now!");
});

app.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));