module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
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
  }