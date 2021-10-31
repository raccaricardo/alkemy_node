const Character = require('./character');
const CharFilm = require('./charfilm');
const Gender = require('./gender');
const FilmOrSerie = require('./filmOrSerie');
const server = require('./server');
const User = require('./user');

// FilmOrSerie.belongsTo(Gender);


module.exports = {
    Character,
    CharFilm,
    FilmOrSerie,
    Gender,
    server,
    User
}