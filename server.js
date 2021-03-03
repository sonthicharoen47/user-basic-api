const express = require("express");
const app = express();
const db = require("./database");
db.authenticate();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const userRoute = require("./routes/user.route");
app.use("/user", userRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
