'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Candidats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      mdp: {
        type: Sequelize.STRING
      },
      cp: {
        type: Sequelize.STRING
      },
      ville: {
        type: Sequelize.STRING
      },
      pays: {
        type: Sequelize.STRING
      },
      mobilite: {
        type: Sequelize.STRING
      },
      dateNaissance: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('Candidats');
  }
};