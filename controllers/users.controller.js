// testing add user not register / login

const db = require('../models')
const user = db.users

const postUsers = async (req,res) => {
    const {firstName, lastName, email, password} = req.body
    const newUser = await user.create({
        firstName, lastName, email, password
    })
    return res.status(201).json({
        msg: 'adding user success'
    })
} 

module.exports = {postUsers}