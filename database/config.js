const Sequelize  = require('sequelize');
// const Sequelize = require('sequelize');

// const sequelize = async () =>{
//   try {
    const sequelize = new Sequelize('alkemy_movie_char', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    storage: './alkemy_movie_char.sqlite',
    logging: false, // <--- Disable logging
    // loggin: console.log,
    port:3306,
    // operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
    });
  sequelize.authenticate().then( () => { console.log("config.js db authenticate OKAY")});

// } catch (error) {
//   console.log(`Error al conectar db: \n ${error}`);
// }
// }
module.exports = sequelize;