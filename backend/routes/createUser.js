const express = require("express");
const router = express.Router();
const user = require("../models/User");
router.post("/createUser", async (req, res) => {
  try {
    await user.create({
      name: "ravi user 1",
      password: "123456789",
      email: "ravi@gmail.com",
      location: "delhi",
    });
    res.json({ success: true });
  } catch (err) {
    console.log("error in creating user");
  }
});
module.exports = router;
