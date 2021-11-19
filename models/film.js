
const { sequelize } = require("../database/config");
const { Model, DataTypes } = require("sequelize");

const Film = sequelize.define(
  "Film",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: true
    },
    releaseat:{
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    qualification:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },
  {
    //other options models
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Film;
