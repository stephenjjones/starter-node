const argon = require('argon2');

const createPassword = (password, cb) => {
  argon2.generateSalt().then(salt => {
    argon2.hash(password, salt).then(hash => {
      cb(null, hash);
    });
  });
};

const checkPassword = (hashedPassword, password, cb) => {
  argon2.verify(hashedPassword, password).then(() => {
    cb(null, true);
  }).catch(() => {
    cb(new Error('invalid password'), false);
  });
};
