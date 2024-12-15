"use strict";
const { Model } = require("sequelize");

const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      users.hasMany(models.pasiens, {
        foreignKey: "user_id",
        as: "patients",
      });
    }
  }
  users.init(
    {
      username: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: DataTypes.ENUM("admin", "user"),
    },
    {
      sequelize,
      modelName: "users",
      hooks: {
        beforeCreate: async (user) => {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        },
      },
      
    }
  );
  users.prototype.cekPassword = async function (reqPassword) {
    return await bcrypt.compare(reqPassword, this.password);
  };
  return users;
};
