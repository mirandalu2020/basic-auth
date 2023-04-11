'use strict';

require('dotenv').config();
const { Sequelize } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const sequelize = new Sequelize(DATABASE_URL);

const createUser = require('./users-model');
const UserModel = createUser(sequelize);

module.exports = {
  sequelize,
  User: UserModel,
};