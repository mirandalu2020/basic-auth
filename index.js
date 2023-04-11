'use strict';

// 3rd Party Resources
require('dotenv').config();
const server = require('./src/server');

// const sequelize = new Sequelize(process.env.DATABASE_URL);
const { sequelize } = require('./src/auth/models/index');

sequelize.sync()
  .then(() => { server.start(3000);},
  );
