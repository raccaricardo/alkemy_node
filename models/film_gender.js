
const { sequelize } = require("../database/config");
const { Model, DataTypes } = require("sequelize");

const FilmGender = sequelize.define(
  "FilmGender",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    gender_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Gender,
        key: "id"
      }
    },
    film_id:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Film,
            key: "id"
       }
    }
  },
  {
    //other options models
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = FilmGender;
