'use strict';
module.exports = function(sequelize, DataTypes) {
  var Competence = sequelize.define('Competence', {
    intitule: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Competence.belongsToMany(models.Offre, {through: 'Offre_competence'});
      }
    }
  });
  return Competence;
};