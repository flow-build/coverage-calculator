const path = require("path");
const BASE_PATH = __dirname;

module.exports = {
  test: {
    client: "pg",
    connection: {
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DATABASE,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
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
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DATABASE,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
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
