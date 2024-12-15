"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pasiens extends Model {
    static associate(models) {
      pasiens.belongsTo(models.users, {
        foreignKey: "user_id",
        as: "user",
      });
      pasiens.hasMany(models.rekam_medis, {
        foreignKey: "pasien_id", 
        as: "rekamMedis", 
      });
    }
  }
  pasiens.init(
    {
      nama: DataTypes.STRING,
      alamat: DataTypes.STRING,
      jenis_kelamin: DataTypes.ENUM("L", "P"),
      umur: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "pasiens",
    }
  );
  return pasiens;
};
