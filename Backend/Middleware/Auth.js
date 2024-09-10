const User = require('../models/users');

module.exports = (req, res, next) => {
    const userCreated = User.find(item => {
        return item === req.body.username
    })
    const userEmailCreated = User.find(item => {
        return item === req.body.email
    })
    if(userCreated || userEmailCreated) {
        res.status(400)
    }
    next()
}