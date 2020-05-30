const mongoose = require('mongoose');
const User = mongoose.model('User', {
  // 定义参数,末尾的user代表生成的表名
  userName: String,
  password: String
}, 'user');
module.exports = User;