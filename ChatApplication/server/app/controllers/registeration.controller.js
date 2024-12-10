const Validator = require("validator");
const service = require("../services/services")

// Create and Save a new Note
exports.registration = (req, res) => {
     
                try {
                var error = ""
                // Validate request
                if (!req.body.email) {
                        error = " email can not be empty"
                }
                if (!Validator.isEmail(req.body.email)) {
                        error = "email is invalid"
                }
                if (!req.body.username) {
                        error = " username can not be empty"
                }
                if (!req.body.password) {
                        error = " password can not be empty"
                }
                // Check if error occure in user input
                if (error) {
                        return res.status(500).send({
                                message: error || "Some error occurred while creating the user."
                        });
                }
                else{
                        service.registration(req.body, (error, result) => {
                                console.log("register",req.body)
                                if (error) {
                                        return res.status(500).send({
                                                message: error || "Some error occurred while creating the user."
                                        });
                                }
                                else {
                                        return res.status(200).send(result);
                                }
                        });
                }

        } catch (error) {
                res.send(error)
        }


};
