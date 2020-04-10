'use strict';
module.exports = (sequelize, DataTypes) => {
  const Indice = sequelize.define('Indice', {
    intitule: DataTypes.STRING,
    idEnigme: DataTypes.INTEGER
  }, {
    freezeTableName: true, // Freeze du nom de la table
  });
  Indice.associate = function(models) {
    // associations can be defined here
    models.Indice.belongsTo(models.Enigme,{
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Indice;
};