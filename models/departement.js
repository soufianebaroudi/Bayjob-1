'use strict';
module.exports = function(sequelize, DataTypes) {
  var Departement = sequelize.define('Departement', {
    intitule: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Departement.belongsTo(models.Region);
      }
    }
  });
  return Departement;
};