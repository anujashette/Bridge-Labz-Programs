const config = require('../../config/database.config.js')
const jwt = require('jsonwebtoken')

// FORMAT OF TOKEN
// token - Bearer <access-token>

exports.verifytoken = (req, res) => {

    const userToken = req.headers['token'];
    console.log(userToken)

    // CHECK IF USERTOKEN IS UNDEFINED
    if (!userToken) {
        
        return res.status(401).send({'message':'No token is provided'})
    }
    else {
        jwt.verify(userToken, config.jwtsecret, (err, decoded) => {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            
            return res.status(200).send({'message':decoded});
          });
        
    }
}
