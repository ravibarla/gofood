const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const getAllUsers = require("../controller/controller");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret="freeendtoend"
router.get("/", getAllUsers);
router.post(
  "/createUser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "password length too short").isLength({ min: 5 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, password, email, location } = req.body;
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(password, salt);

    try {
      const newUser = new User({
        name: name,
        password: secPassword,
        email: email,
        location: location,
      });
      newUser
        .save()
        .then(() => console.log("user is registered succeffully"))
        .catch((err) => console.log("error in creating user"));
      return res
        .status(200)
        .json({ success: " registeration of user succesfully" });
      // res.json({ success: true });
    } catch (err) {
      console.log("error in creating user");
    }
  }
);
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // const data =
    await User.find({ email }).then(async (data) => {
      // console.log(data);
      // console.log("password :" + data[0].password);
      const pwdCompare = await bcrypt.compare(password, data[0].password);
      if (!pwdCompare) {
        return res.status(400).json({ errors: "password mismatches" });
      }
      const data1={
        user:{
          id:data[0].id
        }
      }
      const authToken=jwt.sign(data1,jwtSecret)
      return res.status(200).json({ success: "login successfully",authToken:authToken });
      // if (data[0].password === password) {
      //   console.log("password matched");
      //   return res.status(200).json({ success: "login successfully" });
      // } else {
      //   console.log("password mismatches");
      //   return res.status(400).json({ errors: "password mismatches" });
      // }
    });
    // console.log("data :", data);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
