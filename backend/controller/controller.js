const Users = require("../models/User");
const getAllUsers = async (req, res) => {
  const data =await Users.find({});
  console.log("data :", data);
};
module.exports = getAllUsers;
