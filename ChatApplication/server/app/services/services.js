const Model = require('../models/user.model')
const usermodel = new Model()

exports.registration = (userdata, callback) => {
    console.log("service", userdata)
    try {
        usermodel.registration(userdata, (error, result) => {
            console.log("service", userdata)
            if (error) {
                console.log('service error')
                callback(error)
            }
            else {
                console.log('service executed', result)
                callback(null, result)
            }
        })
    }
    catch (error) {
        callback.send(error)
    }
}

exports.login = (userdata,callback) => {
    try{
        usermodel.login(userdata, (error, result) => {
            console.log("service", userdata)
            if (error) {
                console.log('service error')
                callback(error)
            }
            else {
                console.log('service executed', result)
                callback(null, result)
            }
        })
    }catch(error)
    {
        callback.send(error)
    }
}