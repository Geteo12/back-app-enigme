'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reussite', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCompte: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Compte',
          key: 'id'
        }
      },
      idEnigme: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Enigme',
          key: 'id'
        }
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
    return queryInterface.dropTable('Reussite');
  }
};