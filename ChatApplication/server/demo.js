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