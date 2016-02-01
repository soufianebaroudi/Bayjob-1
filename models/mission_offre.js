'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mission_offre = sequelize.define('Mission_offre', {
    intitule: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Mission_offre.belongsTo(models.Offre);
      }
    }
  });
  return Mission_offre;
};