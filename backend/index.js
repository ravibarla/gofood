const express = require("express");
const mongoDB = require("./config/mongoose");
const routes = require("./routes/createUser");
const app = express();
const port = 4000;
mongoDB();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Request-With,Content-Type,Accept"
  );
  next();
});
app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
