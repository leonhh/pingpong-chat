var express = require('express');
var router = express.Router();
var models = require('../models/index');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

router.post('/login', function (req, res) {

  user = models.user.find({
    where: {
      email: req.body.email
    }
  }).then(function (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      var token = jwt.sign({email: user.email}, 'secret', {
        expiresIn: "7d"
      });

      res.json({
        success: true,
        token: token
      });
    } else {
      res.json({
        success: false,
        token: null
      });
    }
  });

})

router.post('/register', function (req, res) {
  var salt = bcrypt.genSaltSync(10);

  var credentials = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, salt)
  };

  var user = models.user.create(credentials);

  res.json(user);
})

module.exports = router