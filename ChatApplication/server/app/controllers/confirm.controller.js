// const config = require('../../config/database.config.js')
// const jwt = require('jsonwebtoken')
const usercrtV = require('../middleware/TokenVerify.js');
const services = require('../services/services')


exports.confimed=(req, res) =>
{
    // console.log(req.params.token)
    // try{
    //     jwt.verify(req.params.token, config.jwtsecret, (err, decoded) => {
    //         if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            
    //         return res.status(200).send({auth: true,'message':'Login confirmed'});
    //       });
    // }catch(error)
    // {
    //     console.log(error)
    // }

    usercrtV.verifytoken(req.params.token , (error,decoded) =>{
        if (error) {
                res.status(401).send(error)
    }
    else {
                services.verify(decoded,(error,confirmation)=>
                {
                        console.log(confirmation ,'  ',error)
                        if(error) return res.status(401).send(error)
                        return res.status(200).send(confirmation);
                })
    }
    })
}