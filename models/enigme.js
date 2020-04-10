'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enigme = sequelize.define('Enigme', {
    intitule: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, {
    freezeTableName: true, // Freeze du nom de la table
  });
  Enigme.associate = function(models) {
    // associations can be defined here
    models.Enigme.hasMany(models.Indice);
    models.Enigme.hasMany(models.Reussite);
  };
  return Enigme;
};