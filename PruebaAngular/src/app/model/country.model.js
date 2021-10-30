module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("country", {
      name: {
        type: Sequelize.STRING
      },
      capital: {
        type: Sequelize.STRING
      },
    });
  
    return Country;
  };