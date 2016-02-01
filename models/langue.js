'use strict';
module.exports = function(sequelize, DataTypes) {
  var Langue = sequelize.define('Langue', {
    intitule: DataTypes.STRING,
    niveau: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Langue.belongsTo(models.CV);
      }
    }
  });
  return Langue;
};