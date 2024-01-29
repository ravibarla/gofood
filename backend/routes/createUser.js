const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const getAllUsers = require("../controller/controller");
router.get("/", getAllUsers);
router.post(
  "/createUser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "password length too short").isLength({ min: 5 }),
  ],

  async (req, res) => {
    console.log("inside register");
    console.log("body :", req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log("body :", req.body);
    const { name, password, email, location } = req.body;
    try {
      const newUser = new User({
        name: name,
        password: password,
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
    await User.find({ email }).then((data) => {
      console.log(data);
      console.log("password :" + data[0].password);
      if (data[0].password === password) {
        console.log("password matched");
        return res.status(200).json({ success: "login successfully" });
      } else {
        console.log("password mismatches");
        return res.status(400).json({ errors: "password mismatches" });
      }
    });
    // console.log("data :", data);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
