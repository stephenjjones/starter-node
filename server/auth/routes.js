const express = require('express');

const controllers = require('./controllers');

const router = express.Router();

router.use((req, res, next) => {
  next()
});

router.get('/register', controllers.register);
router.post('/register', controllers.registerProcess);

router.get('/login', controllers.login);

router.get('/users', controllers.getAllUsers);
router.post('/users', controllers.createUser);
router.get('/user/:userId', controllers.getUser);
router.put('/user/:userId', controllers.updateUser);
router.delete('/user/:userId', controllers.deleteUser);

module.exports = router;
