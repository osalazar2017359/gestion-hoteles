'use strict'

var jwt = require('jwt-simple')
var moment = require('moment')
var secretKey = 'encriptacion-PrivG4@'

exports.createToken = (user) => {
    var payload = {
        sub: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(2, 'hours').unix()
    }
    return jwt.encode(payload, secretKey)
}