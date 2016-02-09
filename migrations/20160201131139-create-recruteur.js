'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Recruteurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomRecruteur: {
        type: Sequelize.STRING
      },
      prenomRecruteur: {
        type: Sequelize.STRING
      },
      nomEntreprise: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      ville: {
        type: Sequelize.STRING
      },
      cp: {
        type: Sequelize.STRING
      },
      pays: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      telFixe: {
        type: Sequelize.STRING
      },
      telMobile: {
        type: Sequelize.STRING
      },
      mdp: {
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
    return queryInterface.dropTable('Recruteurs');
  }
};