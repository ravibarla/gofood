const mongoose = require("mongoose");
const mongoURI = `mongodb+srv://ravibarla1:Py4eEMLzyjpk0NeN@cluster0.vnsn4kw.mongodb.net/goFoodMern?retryWrites=true&w=majority`;
// `mongodb://127.0.0.1:27017/go-food`;

const mongoDB = async () => {
  await mongoose
    .connect(mongoURI)
    .then(async () => {
      console.log("connected");
      // const fetched_data = await mongoose.connection.db.collection("foodData");
    })
      // fetched_data.find({}).toArray((error, data) => {
        // const data=fetched_data.find({})
        // console.log(data.toArray().then(data=>console.log(data)))
        // })
      //   if (error) {
      //     console.log(error);
      //   } else {

      //     console.log("data :", data);
      //   }
      // });
    .catch((err) => console.log("not connected"));
};

module.exports = mongoDB;
