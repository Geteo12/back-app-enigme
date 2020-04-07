module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      email: {
        type: Sequelize.STRING
      },
      pseudo: {
        type: Sequelize.STRING
      },
      mdp: {
        type: Sequelize.STRING
      }
    });
  
    return Users;
  };