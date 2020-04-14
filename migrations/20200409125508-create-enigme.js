'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Enigme', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      intitule: {
        allowNull: false,
        type: Sequelize.STRING
      },
      points: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      reponse: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dateDebut: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dateFin: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Enigme');
  }
};