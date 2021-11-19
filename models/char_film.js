const { sequelize } = require("../database/config");
const { Model, DataTypes } = require("sequelize");

const CharFilm = sequelize.define(
  "CharFilm",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    char_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Character,
        key: "id",
      },
    },
    film_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Film,
        key: "id",
      },
    },
  },
  {
    //other options models
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = CharFilm;
