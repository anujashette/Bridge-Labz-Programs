module.exports = (app) => {
    const usercrt = require('../controllers/registeration.controller.js');
    
   
    // Create a new user
    app.post('/user/registration', usercrt.registration);

    // Retrieve a single user with noteId
    // app.get('/user/login/:userId', user.findOne);

    
}