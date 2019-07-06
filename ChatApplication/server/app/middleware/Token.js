const config = require('../../config/database.config.js')
const jwt = require('jsonwebtoken')

exports.genToken = (userdata,callback) => {

    username=userdata.username
    const payload = {
            user : {
                id:userdata.id,
                username:userdata.username
            }
        };
        jwt.sign(
            payload,
            config.jwtsecret,
            {
              expiresIn: 36000 
            },
            (err, token) => {
                console.log(token)
                if (err) return callback(err)
                return callback(null,{token : token,
                username
               })
            }
          );
}