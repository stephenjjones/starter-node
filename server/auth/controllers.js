const User = require('./models').User;

exports.register = (req, res) => {
  res.send('register');
};

exports.registerProcess = (req, res) => {
  res.send('register process');
};

exports.login = (req, res) => {
  res.send('login');
};

exports.getAllUsers = (req, res) => {
  User.find((err, users) => {
    if (err) { res.send('error getting users') };
    res.send(users);
  });
};

exports.getUser = (req, res) => {
  const userId = req.params.userId
  User.findOne({id: userId}, (err, user) => {
    if (err) { res.send('error getting user') };
    res.send('got user');
  });
};

exports.createUser = (req, res) => {
  user = new User();
  res.send(user);
};

exports.updateUser = (req, res) => {
  const userId = req.params.userId
  // 2nd param is data to update
  User.findOneAndUpdate({id: userId}, {email: req.body.email}, (err, user) => {
    if (err) { res.send('error updating user') };
    
    // send back updated user data
    res.send(user);
  });
};

exports.deleteUser = (req, res) => {
  res.send('delete user');
};
