const User =require("./../model/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register = (req,res) =>{
  
    User.findOne({ emailaddress: req.body.emailaddress }).then(user => {
        if (user) {
           
          return res.json({ emailaddress: "Email already exists" });
        } else {
          const newUser = new User({
           
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        emailaddress:req.body.emailaddress,
        password:req.body.password,
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              
              newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
          });
        }
      });
}


exports.login = (req,res) =>{
   
 const password=req.body.password
    User.findOne({emailaddress: req.body.emailaddress }).then(user => {
  
      if (!user) {
        return res.json({ emailaddress: "Email not found" });
      }
  
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
         
          const payload = {
            id: user._id,
          
          };
  
          jwt.sign({
          payload},
            "secret",
            {
              expiresIn: '1h' 
            },
            (err, token) => {
              
              res.json({
                success: true,
                token: token,
                user:user
              });
             
            }
          );
        } else {
          return res.json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
}

exports.getalluser = (req,res) => {
  User.find().
  then((getuser)=>{
    res.json(getuser)
  })
  .catch((err) =>{
    console.log(err)
  })
}