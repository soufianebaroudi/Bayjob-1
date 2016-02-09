'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Formations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      intitule_diplome: {
        type: Sequelize.STRING
      },
      etablissement: {
        type: Sequelize.STRING
      },
      annee: {
        type: Sequelize.INTEGER
      },
      mention: {
        type: Sequelize.STRING
      },
      ville: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Formations');
  }
};