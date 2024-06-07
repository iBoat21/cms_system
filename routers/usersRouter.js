const userControllers = require('../controllers/users.controller')
const userRouter = require('express').Router()

userRouter.post('/postUsers',userControllers.postUsers)

module.exports = userRouter