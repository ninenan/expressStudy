const mongoose = require('mongoose');
const News = require('../modules/news_modules')

/**
 * @description 创建新闻
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 * @returns {Object} 
 */
function createNews (req, res, next) {
  console.log('req.body:',req.body)
  const news = new News(req.body)
  news.save().then(data => {
    res.json(data)
  })
}

module.exports = {
  createNews
}