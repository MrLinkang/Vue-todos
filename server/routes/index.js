const router = require('koa-router')()
const userTodo = require('./userTodo')

const mongoose = require('mongoose')

switch (process.env.NODE_ENV) {
  default:
    mongoose.connect('mongodb://127.0.0.1:27017/todos')
    break
}
mongoose.connection.on('connected', () => { console.log('MongoDB connected success') })

router.use('/api/todo', userTodo.routes(), userTodo.allowedMethods())

module.exports = router
