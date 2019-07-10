const config = require('../../config/database.config.js')
const jwt = require('jsonwebtoken')


// FORMAT OF TOKEN
// token - Bearer <access-token>

exports.verifytoken = (userToken,callback) => {

    // const userToken = req.headers['token'];  used for post

    // CHECK IF USERTOKEN IS UNDEFINED
    if (!userToken) {
        
        return callback({'message':'No token is provided'})
    }
    else {
        jwt.verify(userToken, config.jwtsecret, (err, decoded) => {
            if (err) callback(err)
            // return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            
            // return res.status(200).send({auth: true,'message':decoded});
            callback(null,decoded)
          });
    }
}
