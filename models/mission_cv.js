'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mission_CV = sequelize.define('Mission_CV', {
    intitule: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Mission_CV.belongsTo(models.Experience_pro);
      }
    }
  });
  return Mission_CV;
};