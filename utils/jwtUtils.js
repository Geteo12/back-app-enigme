let jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'hfiurhg54dfgr8cjiliolk485hbccdfsfdj8dsfs6548sdfsgkmnccvxswdguu45';

module.exports =  {
    GenerateTokenForUser: function (userData){
        return jwt.sign({
            id: userData.id,
            isAdmin: userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h'
        })
    }
}