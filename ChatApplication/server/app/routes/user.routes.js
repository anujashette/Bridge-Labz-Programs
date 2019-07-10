module.exports = (app) => {
    const usercrtR = require('../controllers/registeration.controller.js');
    const usercrtL = require('../controllers/login.controller.js');
   const usercrtV = require('../middleware/TokenVerify.js');
   const confirm = require('../controllers/confirm.controller');


//    @route    post api/ auth
//    @desc     register user
//    @access   public

    // Create a new user
    app.post('/user/registration', usercrtR.registration);

    // User login 
    app.post('/user/login', usercrtL.login);

    //token verification
    // app.post('/', usercrtV.verifytoken)

    app.get('/user/confirmed/:token',confirm.confimed)

     
}