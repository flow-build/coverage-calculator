const path = require("path");
const BASE_PATH = __dirname;

module.exports = {
  test: {
    client: "pg",
    connection: {
      host: "coverage_db",
      database: "workflow",
      user: "postgres",
      password: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(BASE_PATH, "db/migrations"),
    },
    seeds: {
      directory: path.join(BASE_PATH, "db/seeds"),
    },
  },
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(BASE_PATH, "db/migrations"),
    },
    seeds: {
      directory: path.join(BASE_PATH, "db/seeds"),
    },
  },
};
