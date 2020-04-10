'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reussite = sequelize.define('Reussite', {
    idCompte: DataTypes.INTEGER,
    idEnigme: DataTypes.INTEGER
  }, {
    freezeTableName: true, // Freeze du nom de la table
  });
  Reussite.associate = function(models) {
    // associations can be defined here
    models.Reussite.belongsTo(models.Compte,{
      foreignKey: {
        allowNull: false
      }
    });
    models.Reussite.belongsTo(models.Enigme,{
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Reussite;
};