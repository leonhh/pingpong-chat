var express = require('express');
var router = express.Router();
var models = require('../models/index');
var auth = require('../middlewares/auth'); 

router.get('/', auth, function (req, res) {

  user = models.user.findAll().then(function (users) {
    res.json(users)
  });

})


module.exports = router