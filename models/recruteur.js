'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recruteur = sequelize.define('Recruteur', {
    nomRecruteur: DataTypes.STRING,
    prenomRecruteur: DataTypes.STRING,
    nomEntreprise: DataTypes.STRING,
    adresse: DataTypes.STRING,
    ville: DataTypes.STRING,
    cp: DataTypes.STRING,
    pays: DataTypes.STRING,
    telFixe: DataTypes.STRING,
    telMobile: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Recruteur.hasMany(models.Offre);
      }
    }
  });
  return Recruteur;
};