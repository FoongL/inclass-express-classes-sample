const sequelizePackage = require('sequelize');
const allConfig = require('../config/config')

const  initUsersModel = require('./usersModel')
const initItemsModel = require('./itemsModel')

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Users = initUsersModel(sequelize, Sequelize.DataTypes);
db.Items = initItemsModel(sequelize, Sequelize.DataTypes);

// creates a method in the
// user object with getSentMessages, etc.
// allows the use of include with sentMessages
db.Users.hasMany(db.Items);
db.Items.belongsTo(db.Users);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db