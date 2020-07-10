const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// Used instead of a DB to simplify
const userDB = {
  id: 1,
  email: 'Meao@test.it',
  password: 'testpass',
};

passport.serializeUser(function(user, done) {
  console.log('Serialised user: ', user);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('Deserialised user: ', id);
  const user = userDB.id === id ? userDB : false;
  done(null, user);
});

passport.use(
  new LocalStrategy({ usernameField: 'email' }, function(
    email,
    password,
    done
  ) {
    if (email === userDB.email && password === userDB.password) {
      return done(null, userDB);
    } else {
      return done(null, false);
    }
  })
);