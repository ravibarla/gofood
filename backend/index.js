const express = require("express");
const mongoDB = require("./config/mongoose");
const routes = require("./routes/createUser");
const app = express();
const port = 4000;
mongoDB();
app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
