const router = require("express").Router();
const User = require('../models/User')

// register

router.post("/register", async (req, res) => {
  try {
    // create new user
    const newUser = new User({
      username:req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    // save user and send response
    const user = await newUser.save();
    res.status(200).json(user._id)

  }catch(err) {
    res.status(500).json(err)
  }
})


module.exports = router