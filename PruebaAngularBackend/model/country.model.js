module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("country", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
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