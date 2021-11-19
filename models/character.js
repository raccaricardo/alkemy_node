const { sequelize } = require("../database/config");
const { Model, DataTypes } = require("sequelize");

const Character = sequelize.define(
  "Character",
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
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weight:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    history: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    //other options models
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Character;
