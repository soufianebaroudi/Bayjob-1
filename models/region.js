'use strict';
module.exports = function(sequelize, DataTypes) {
  var Region = sequelize.define('Region', {
    intitule: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Region.hasMany(models.Departement);
      }
    }
  });
  return Region;
};