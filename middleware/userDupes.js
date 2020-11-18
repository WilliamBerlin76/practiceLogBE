const Users = require('../models/users-model');

module.exports = {
    userNameDupe,
    emailDupe
}

function userNameDupe(req, res, next){

    let { username } = req.body;
    Users.findBy({ username })
        .then(user => {
            if(user){
                res.status(501).json({message: 'That username has been taken'})
            } else {
                next();
            }
        })
}

async function emailDupe(req, res, next){
    let { email } = req.body;

    Users.findBy({ email })
        .then(user => {
            if(user){
                res.status(501).json({message: 'That email has been registered already'})
            } else {
                next();
            }
        })
}