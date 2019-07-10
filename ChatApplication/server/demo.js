bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(newUser.password, salt, (err, hash) => {
  if (err) throw err;
  newUser.password = hash;
  });
  });
  
  //     if(data>0)
        //     {
        //         console.log('User already exist',data)
        //         callback('User already exist of this email id')
        //     }
        //  else{   


        //Tokens
         
          const payload = {
            user : {
                id:user.id
            }
        };

        jwt.sign(
            payload,
            config.jwtsecret,
            {expiresIn:36000},
            (err,token) =>{
                console.log('token',token)
                if (err) return err;
                return callback(null, result)
            }
        )










        const Validator = require("validator");
// const isEmpty = require("is-empty");
// module.exports = function validateLoginInput(data) {
//   let errors = {};
// // Convert empty fields to an empty string so we can use validator functions
//   data.email = !isEmpty(data.email) ? data.email : "";
//   data.password = !isEmpty(data.password) ? data.password : "";
// // Email checks
//   if (Validator.isEmpty(data.email)) {
//     errors.email = "Email field is required";
//   } else if (!Validator.isEmail(data.email)) {
//     errors.email = "Email is invalid";
//   }
// // Password checks
//   if (Validator.isEmpty(data.password)) {
//     errors.password = "Password field is required";
//   }
// return {
//     errors,
//     isValid: isEmpty(errors)
//   };
// };



//  @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });
