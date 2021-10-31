const Sequelize = require('sequelize');
const sequelize = require('../database/config');
const FilmOrSerie = require('./filmOrSerie');
const CharFilm = require('./charfilm');


const Character = sequelize.define('character', {

    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      // autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      // unique: true,
      allowNull: false
    },
    age:{
      type: Sequelize.INTEGER,
      allowNull: false
    },
    weight: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    history: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false
    }
    
  },{
    timestamps: false 
  })
  
module.exports = Character;

