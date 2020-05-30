var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', {
  name: String,
  color: String
});

/* GET home page. */
router.get('/', function (req, res, next) {
  const kitty = new Cat({
    name: 'Nine', color: 'red'
  });
  kitty.save().then(data => {
    res.json(data)
  });
  // res.render('index', { title: 'Express' });
});

router.post('/list', function (req, res, next) {
  res.send('新闻')
})

module.exports = router;
