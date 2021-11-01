module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("country", {
      id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      capital: {
        type: Sequelize.STRING
      },
    });
  
    return Country;
  };