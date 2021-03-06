'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enigme = sequelize.define('Enigme', {
    intitule: DataTypes.STRING,
    points: DataTypes.INTEGER,
    reponse: DataTypes.STRING,
    dateDebut: DataTypes.DATE,
    dateFin: DataTypes.DATE,
    description: DataTypes.STRING
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