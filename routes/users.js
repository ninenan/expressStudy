var express = require('express');
var router = express.Router();
const UserControl = require('../controllers/user_controllers')

router.post('/createUser', UserControl.createUser);
router.post('/updateUser', UserControl.updateUser);
router.delete('/removeUser', UserControl.removeUser);
router.get('/getUser', UserControl.getUser);

module.exports = router;
