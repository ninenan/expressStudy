const mongoose = require('mongoose');
const User = require('../modules/user_modules');

/**
 * @description 新增用户
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function createUser(req, res, next) {
  // console.log('req.body:', req.body)
  const user = new User(req.body)
  user.save().then(data => {
    res.json(data)
  })
}

/**
 * @description 修改用户
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function updateUser(req, res, next) {
  // console.log('req.body:', req.body)
  const id = req.body.id
  User.findByIdAndUpdate(id, { $set: req.body }, { new: false }).then(data => {
    res.json(data);
  })
}

/**
 * @description 删除用户
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function removeUser(req, res, next) {
  const id = req.query.id
  // console.log(req.params);
  User.findByIdAndDelete(id, (err, data) => {
    res.json(data);
  })
}

/**
 * @description 获取用户信息
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function getUser(req, res, next) {
  // console.log('req.body:', req.body)
  const id = req.query.id
  User.findById(id, (err, data) => {
    res.json(data);
  })
}
module.exports = {
  createUser,
  updateUser,
  removeUser,
  getUser
}