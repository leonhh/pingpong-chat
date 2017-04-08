var express = require('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(require('./controllers'))

app.listen(3000, function() {
  console.log('Listening on port 3000...')
})