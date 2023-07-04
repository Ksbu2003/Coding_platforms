const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const User = require("../models/user");

const router = express.Router();



router.post("/signup",async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      password: secPassword,
      email: req.body.email
    });

    const createdUser = await newUser.save();

    const token = jwt.sign(
      { _id: createdUser._id },
      process.env.JWT_SECRET
    );

    return res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(201)
      .json({ success: true, message: "process successful" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message: "process failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = req.body;
    const userdata = await User.findOne({ email: user.email });
    
    console.log(user)
    console.log(userdata)
    if (!userdata) {
      return res
        .status(400)
        .json({ success: false, message: "login with correct credentials" });
    } else {
      const match = await bcrypt.compare(
        user.password,
        userdata.password
      );
      if (match) {
        const token = jwt.sign(
          { _id: userdata._id },
          process.env.JWT_SECRET
        );

        return res
          .cookie("token", token, {
            httpOnly: true,
          })
          .status(200).json({sucess:true});
      } else {
        return res
          .status(400)
          .json({ success: false, message: "login with correct credentials" });
      }
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "internal sever error" });
  }
});

router.get("/isLoggedin", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(200).json({ loggedIn: false });
    } else {
      const info = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.find({_id:info._id})
      if (!user) {
        return res.status(200).json({ loggedIn: false });
      }
      return res.status(200).json({ loggedIn: true,user });
    }
  } catch (error) {
    return res.status(200).json({ loggedIn: false });
  }
});

 

module.exports = router;

module.exports = router;