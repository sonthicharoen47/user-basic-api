const User = require("../models/user.model");
const userRoute = require("express").Router();

userRoute.get("/", (req, res) => {
  User.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

userRoute.post("/create", (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  User.create(user)
    .then(() => {
      res.status(200).send("add a new user success!");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = userRoute;
