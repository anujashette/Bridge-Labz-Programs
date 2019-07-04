const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
}, {
        timestamps: true
    });
var User = mongoose.model('User', UserSchema);

// function userModel()
// {
// }

exports.registration = (userdata, callback) => {


    User.find({ "email": userdata.email }, (error, data) => {
        if (error) {
            console.log('Error in registration process:', error)
            return callback(error)
        }
        else {
            // Create a User 
            const user = new User({
                email: userdata.email || "Untitled Note",
                username: userdata.username,
                password: userdata.password,
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, (err, hash) => {
                    if (err) throw err;
                    user.password = hash;
                    // Save user req.body in the database
                    user.save((error, result) => {
                        if (error) {
                            return callback(error)
                        } else {
                            console.log("save successfully ", result)
                          
                            return callback(null, result)
                        }
                    })
                });
            });
        }
    })
};

// // let registration = new userModel()
//  module.exports ={userModel}


