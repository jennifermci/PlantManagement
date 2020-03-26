const User = require("../models/user.model")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

module.exports.findAllUsers = (req, res) =>{
    User.find()
        .then(allUsers => res.json({users: allUsers}))
        .catch(err => err.json({message: "Tried to get all the plants, but failed.", error: err}))
}

module.exports.registerOneUser = (req, res) =>{
    const user = new User(req.body)
    user.save()
        .then(()=>{
            res.json({msg: "Success!", user: user})
        })
        .catch(err => res.status(400).json(err))
}

module.exports.loginOneUser = (req, res) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user === null) {
          res.json({ msg: "user: invalid login attempt" });
        } else {
            bcrypt.compare(req.body.password, user.password).then(passwordIsValid => {
                if (passwordIsValid) {
                    const secret = "mysecret";
                    const payload = {
                        _id: user._id
                    };
                    const newJWT = jwt.sign(payload, secret);
                    res
                        .cookie("usertoken", newJWT, secret,{
                        httpOnly: true
                        })
                        .json({ msg: "success!" });
                } else {
                  res.json({ msg: "bcrpyt else: invalid login attempt" });
                }
              })
              .catch(err => res.json({ msg: "bcrypt err: invalid login attempt" }));
          }
      })
      .catch(err => res.json(err));
  };

module.exports.deleteOneUser = (req, res) => {
    User.deleteOne({_id: req.params.id})
        .then(res => res.json(res))
        .catch(err=> res.jason({message:"tried to delete a user, but failed.", error: err}))
}