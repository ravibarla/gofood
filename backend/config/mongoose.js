const mongoose = require("mongoose");
const mongoURI = `mongodb+srv://ravibarla1:Py4eEMLzyjpk0NeN@cluster0.vnsn4kw.mongodb.net/goFoodMern?retryWrites=true&w=majority`;


const mongoDB = async () => {
  await mongoose
    .connect(mongoURI)
    .then(async () => {
      console.log("connected");
    })
    .catch((err) => console.log("not connected"));
};

module.exports = mongoDB;
