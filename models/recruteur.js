'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recruteur = sequelize.define('Recruteur', {
    nomRecruteur: DataTypes.STRING,
    nomEntreprise: DataTypes.STRING,
    adresse: DataTypes.STRING,
    ville: DataTypes.STRING,
    cp: DataTypes.STRING,
    pays: DataTypes.STRING,
    mail: DataTypes.STRING,
    mdp: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Recruteur.hasMany(models.Offre);
      }
    }
  });
  return Recruteur;
};