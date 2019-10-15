const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { checkAuth } = require('../middlewares/auth');

router.post('/signup', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  User.addUser(newUser, err => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register user' });
    } else {
      res.json({ success: true, msg: 'User registered' });
    }
  });
});

router.post('/authenticate', (req, res) => {
  const { username, password } = req.body;

  User.getUserByUsername(username, (err, user) => {
    if (err) {
      throw err;
    }

    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) {
        throw err;
      }

      if (isMatch) {
        const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
          expiresIn: 604000, // 1 week
        });

        const { _id: id, name, username, email } = user;

        res.json({
          success: true,
          token,
          user: {
            id,
            name,
            username,
            email,
          },
        });
      } else {
        return res.json({
          success: false,
          msg: 'You have entered a wrong username or password',
        });
      }
    });
  });
});

router.get('/profile', checkAuth, function(req, res) {
  const { _id: id, name, email, username, iat, exp } = req.userData;

  res.json({
    id,
    name,
    email,
    username,
    iat,
    exp,
  });
});

module.exports = router;
