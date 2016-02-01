'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Offres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titre: {
        type: Sequelize.STRING
      },
      xpRequise: {
        type: Sequelize.STRING
      },
      tempDeTravail: {
        type: Sequelize.INTEGER
      },
      resume: {
        type: Sequelize.TEXT
      },
      salaire: {
        type: Sequelize.FLOAT
      },
      ville: {
        type: Sequelize.STRING
      },
      dateEmission: {
        type: Sequelize.DATE
      },
      handicap: {
        type: Sequelize.BOOLEAN
      },
      mail: {
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
    return queryInterface.dropTable('Offres');
  }
};