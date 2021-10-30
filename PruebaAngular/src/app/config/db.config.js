module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "countriesdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };