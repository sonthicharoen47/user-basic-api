const { Sequelize } = require("sequelize");
require("dotenv").config();

// module.exports = new Sequelize(
//   process.env.DATABASE,
//   process.env.USER,
//   process.env.PASS,
//   {
//     host: process.env.HOST,
//     dialect: "postgres",
//   }
// );

module.exports = new Sequelize(
  "postgres://lnjzesrbjqgdai:677b061c26832f33f3cc852742ff3f04d6a1e6e69574777cf2a3a13d3c0f90a7@ec2-18-211-97-89.compute-1.amazonaws.com:5432/d672r1q0gvj3rp"
);
