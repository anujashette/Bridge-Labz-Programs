const model = require('../models/user.model') 

exports.registration = (userdata,callback) => {
    console.log("service",userdata)
    try{
  model.registration(userdata,(error,result)=>{
    console.log("service",userdata)
        if(error)
        {
            console.log('service error')
             callback(error)
        }
        else
        {
            console.log('service executed',result)
             callback(null,result)
        }
    })
}
catch(error)
{
    callback.send(error)
}
}