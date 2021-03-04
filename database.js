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

module.exports = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
});
