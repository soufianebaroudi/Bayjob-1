'use strict';
module.exports = function(sequelize, DataTypes) {
  var Formation = sequelize.define('Formation', {
    intitule_diplome: DataTypes.STRING,
    etablissement: DataTypes.STRING,
    annee: DataTypes.INTEGER,
    mention: DataTypes.STRING,
    ville: DataTypes.STRING,
    encours:DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Formation.belongsTo(models.CV);
      }
    }
  });
  return Formation;
};