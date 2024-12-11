"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pasien extends Model {
    static associate(models) {
      pasien.belongsTo(models.users, {
        foreignKey: "user_id",
        as: "user",
      });
      pasien.hasMany(models.rekam_medis, {
        foreignKey: "pasien_id", 
        as: "rekamMedis", 
      });
    }
  }
  pasien.init(
    {
      nama: DataTypes.STRING,
      alamat: DataTypes.STRING,
      jenis_kelamin: DataTypes.ENUM("L", "P"),
      umur: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "pasien",
    }
  );
  return pasien;
};
