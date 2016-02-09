'use strict';
module.exports = function(sequelize, DataTypes) {
  var Competence_CV = sequelize.define('Competence_CV', {
    intitule: DataTypes.STRING,
    niveau: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Competence_CV.belongsTo(models.CV);
      }
    }
  });
  return Competence_CV;
};