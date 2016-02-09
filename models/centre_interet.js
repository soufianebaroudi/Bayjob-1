'use strict';
module.exports = function(sequelize, DataTypes) {
  var Centre_interet = sequelize.define('Centre_interet', {
    intitule: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Centre_interet.belongsTo(models.CV);
      }
    }
  });
  return Centre_interet;
};