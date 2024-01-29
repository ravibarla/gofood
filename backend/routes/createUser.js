const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.post("/createUser", async (req, res) => {
  console.log(req.body);
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
      .then(() => console.log("doctor is registered succeffully"))
      .catch((err) => console.log("error in creating user"));
    return res.send(" registeration of doctor succesfully");
    // res.json({ success: true });
  } catch (err) {
    console.log("error in creating user");
  }
});
module.exports = router;
