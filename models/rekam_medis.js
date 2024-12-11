'use strict';
const {
  Model
} = require('sequelize');
const pasien = require('./pasien');
module.exports = (sequelize, DataTypes) => {
  class rekam_medis extends Model {
 
    static associate(models) {
      rekam_medis.belongsTo(models.pasien, {
        foreignKey: 'pasien_id', 
        as: 'pasien' 
      });
      
    }
  }
  rekam_medis.init({
    pasien_id: DataTypes.INTEGER,
    tanggal: DataTypes.DATEONLY,
    keluhan: DataTypes.TEXT,
    diagnosis: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'rekam_medis',
  });
  return rekam_medis;
};