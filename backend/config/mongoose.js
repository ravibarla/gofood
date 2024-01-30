const mongoose = require("mongoose");
const mongoURI = `mongodb+srv://ravibarla1:Py4eEMLzyjpk0NeN@cluster0.vnsn4kw.mongodb.net/goFoodMern?retryWrites=true&w=majority`;
// const mongoURI=`mongodump --uri mongodb+srv://ravibarla1:Py4eEMLzyjpk0NeN@cluster0.vnsn4kw.mongodb.net/goFoodMern`
const mongoDB = async () => {
  await mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
    })
    .then(async () => {
      console.log("connected");
      // const fetchedData = await mongoose.connection.db.collections("foodData");
      // fetchedData.find({}).toArray((err, data) => {
      //   if (err) {
      //     console.log("err :", err);
      //   } else {
      //     console.log("data: ", data);
      //   }
      // });
    })
    .catch((err) => console.log("not connected"));
};

module.exports = mongoDB;
