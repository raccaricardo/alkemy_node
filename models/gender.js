const Sequelize = require('sequelize');

const sequelize = require('../database/config');
 
const Gender = sequelize.define('gender',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        // autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    image:{
        type: Sequelize.STRING,
        allowNull: false
    },
   
}, {
    timestamps: false
})
module.exports = Gender;