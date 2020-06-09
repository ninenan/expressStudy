var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');
const Cat = mongoose.model('Cat', {
  name: String,
  color: String
});

/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readFile('./dist/index.html',(err, data) => {
    if(err) throw err
    res.end(data)
  })
});


module.exports = router;
