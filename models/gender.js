
const { sequelize } = require("../database/config");
const { Model, DataTypes } = require("sequelize");

const Gender = sequelize.define(
  "Gender",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: true
    },
  },
  {
    //other options models
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Gender;
