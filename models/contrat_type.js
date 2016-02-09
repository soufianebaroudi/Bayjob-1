'use strict';
module.exports = function(sequelize, DataTypes) {
  var Contrat_type = sequelize.define('Contrat_type', {
    intitule: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Contrat_type.hasMany(models.Offre);
        Contrat_type.hasMany(models.Experience_pro);
      }
    }
  });
  return Contrat_type;
};