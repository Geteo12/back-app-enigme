'use strict';
module.exports = (sequelize, DataTypes) => {
  const Compte = sequelize.define('Compte', {
    pseudo: DataTypes.STRING,
    email: DataTypes.STRING,
    mdp: DataTypes.STRING
  }, {
    freezeTableName: true, // Freeze du nom de la table
  });
  Compte.associate = function(models) {
    // associations can be defined here
    models.Compte.hasMany(models.Reussite);
  };
  return Compte;
};