const Sequelize = require('sequelize');

const sequelize = require('../database/config');
const { Character, FilmOrSerie } = require('./index');


const CharFilm = sequelize.define('char_film', {
  id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      // autoIncrement: true,
      allowNull: false,
      primaryKey: true
  },
  id_character: {
      type: Sequelize.UUID,
      allowNull: false
  },
  id_filmorserie: {
      type: Sequelize.UUID,
      allowNull: false
  },
 
}, {  
  timestamps: false
}
);

// // Character.belongsToMany(FilmOrserie, { through: char_film, foreignKey: 'id_character' });
// Character.belongsToMany(FilmOrSerie, { through: CharFilm });

// FilmOrserie.belongsToMany(Character, { through: CharFilm });

module.exports = CharFilm;