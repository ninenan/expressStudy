const mongoose = require('mongoose');
const News = mongoose.model("News", {
  // 定义参数,末尾的news代表生成的表名
  title: String, // 标题
  content: String // 内容
},'news')
module.exports = News