'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rekam_medis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pasien_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pasiens', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL', 
      },
      tanggal: {
        type: Sequelize.DATE
      },
      keluhan: {
        type: Sequelize.TEXT
      },
      diagnosis: {
        type: Sequelize.TEXT
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rekam_medis');
  }
};