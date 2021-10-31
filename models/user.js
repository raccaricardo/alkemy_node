const Sequelize = require('sequelize');

const sequelize = require('../database/config');
  
const User = sequelize.define('user', {
  id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      // autoIncrement: true,
      allowNull: false,
      primaryKey: true
  },
  name: {
      type: Sequelize.STRING,
      validate: {
        isAlpha: true
      },
      allowNull: false
  },
  email: {
      type: Sequelize.STRING,
      unique: true, //Not Working
      validate:{
        isEmail: true
      },
      allowNull: false
  },
  password: {
      type: Sequelize.STRING(64),
      validate:{
        isAlphanumeric: true,
        len: [8,64]
      },
      allowNull: false
  }

}, {  
  timestamps: true
}
);
module.exports = User;