'use strict';
module.exports = function(sequelize, DataTypes) {
  var Candidat = sequelize.define('Candidat', {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    mail: DataTypes.STRING,
    telFixe: DataTypes.STRING,
    telMobile: DataTypes.STRING,
    mdp: DataTypes.STRING,
    adresse: DataTypes.STRING,
    cp: DataTypes.STRING,
    ville: DataTypes.STRING,
    pays: DataTypes.STRING,
    mobilite: DataTypes.STRING,
    dateNaissance: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Candidat.hasMany(models.CV);
      }
    }
  });
  return Candidat;
};