var express = require('express');
var router = express.Router();

router.use('/auth', require('./authentication'))
router.use('/user', require('./users'))

module.exports = router