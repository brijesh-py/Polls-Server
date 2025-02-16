require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    port:process.env.DB_PORT
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "db.sqlite",
    dialect: "sqlite",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "db.sqlite",
    dialect: "sqlite",
  },
};
