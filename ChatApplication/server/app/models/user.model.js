const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const newToken = require('../middleware/Token')
const sendMail = require('../middleware/NodeMailer')
const sendmail = new sendMail();
const url = 'http://localhost:3000/user/confirmed'

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirmed:{
            type: Boolean,
            defaultValue:false
        },
},
    {
        timestamps: true
    },
    );
var User = mongoose.model('User', UserSchema);
function userModel() {
}

userModel.prototype.registration = (userdata, callback) => {

    User.find({ "email": userdata.email }, (error, data) => {
        if (error) {
            console.log('Error in registration process:', error)
            return callback(error)
        }
        else {
            if(data != ''){
                console.log('user exist')
                return callback('User with email id already exist...')
            }

            // Create a User
            const user = new User({
                email: userdata.email || "Untitled email id",
                username: userdata.username,
                password: userdata.password,
                confirmed: false
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, (err, hash) => {
                    if (err) callback(err)
                    user.password = hash;
                    // Save user req.body in the database
                    user.save((error, result) => {
                        if (error) {
                            return callback(error)
                        } else {
                            console.log("save successfully ", result)
                            sendmail.mailer(url,user.email ,user.id);
                                return callback(null, result)
                            
                        }
                    })
                });
            });
        }
    })
};

userModel.prototype.login = (userdata, callback) => {
    console.log('userData', userdata)

    User.findOne({ "email": userdata.email }, (error, data) => {
        if (error) {
            console.log('Error in registration process:', error)
            return callback(error)
        }
        else {
            if (!data) {
                return callback('user not exist')
            }
            else {
                bcrypt.compare(userdata.password, data.password).then(isMatch => {
                    if (isMatch) {
                        // User matched
                        // Create JWT Payload

                        newToken.genToken(data, (error, token) => {

                            if (error) {
                                return callback(error)
                            }
                            else {
                                return callback(null, token)
                            }
                        })
                    }
                    else {
                        return callback(null, 'Password is incorrect')
                    }
                }).catch(err => {
                    console.log('Could not connect to the database. Exiting now...', err);
                    process.exit();
                })
            }
        }
    })
}

 module.exports = userModel;


