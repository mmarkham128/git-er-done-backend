const jwt = require('jsonwebtoken');
const users = require('../models/users');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose')
var db = mongoose.connection

var authService = {
    signUser: function(user){
        const token = jwt.sign({
            username: user.username,
            id: user.id,
            admin: user.admin
        }, 'secretkey',
        {
            expiresIn: '1h'
        });
        return token;
    },
    verifyUser: function(token){
        try{
            let decoded = jwt.verify(token, 'secretkey')
            return db.collection('users').findOne({where:{ id: decoded.id }}) 
        }catch( err) {
            console.log(err);
            return null;
        }
    },
    hashPassword: function(plainTextPassword){
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(plainTextPassword, salt);
        return hash;
    },
    comparePasswords: function(plainTextPassword, hashedPassword){
        return bcrypt.compareSync(plainTextPassword, hashedPassword);
    }
}

module.exports = authService;