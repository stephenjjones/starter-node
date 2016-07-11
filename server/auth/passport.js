const passport = require('passport');
const local = require('passport-local').Strategy;

const config = require('../../config');
const User = require('./models').User;
const password = require('./password');

passport.use(new local(
  (username, password, done) => {
    User.findOne({username: username}, (err, user) => {
      if (user) {
        password.checkPassword(user.hashedPassword, password, (err, isAuth) => {
          if (isAuth) {
            // profile is handed back to passport to serialize and store
            // in the session
            done(null, user);
          } else {
            done(null, false, {message: 'Wrong username or password'});
          }
        });
      } else {
        done(null, false, {message: 'Wrong username or password'});
      }
    });
  }  
));

passport.serializeUser((user, done) {
  done(null, user);
});

passport.deserializeUser((user, done) {
  done(null, user);
});

exports.passport = passport;
