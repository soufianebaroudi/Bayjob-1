'use strict';
module.exports = function(sequelize, DataTypes) {
  var Niveau_etude = sequelize.define('Niveau_etude', {
    intitule: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Niveau_etude.hasMany(models.Offre);
      }
    }
  });
  return Niveau_etude;
};