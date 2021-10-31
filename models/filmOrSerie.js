const Sequelize = require('sequelize');

const Gender = require('../models/gender');
const sequelize = require('../database/config');
const Character = require('./character');
 const CharFilm = require('./charfilm');

const FilmOrSerie = sequelize.define('filmorserie', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    // autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  age:{
    type: Sequelize.INTEGER,
    // type: Sequelize.DATEONLY,
    // defaultValue: Sequelize.NOW,
    validate:{
      // isDate: true
    },
    allowNull: false
  },
  qualification: {
    type: Sequelize.INTEGER,
    validate:{
    // is: /[1-5]/,
    min: 1,
    max: 5,
    },
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    // allowNull: false
  },
  id_gender: {
    type: Sequelize.UUID
  }
}, {
timestamps: false
}
);


module.exports = FilmOrSerie;