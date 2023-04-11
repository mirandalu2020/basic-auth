'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const userRouter = require('./auth/router.js');
app.use(userRouter);

app.use(express.urlencoded({ extended: true }));

const userErr = require('./middleware/404.js');
const serverErr = require('./middleware/500.js');

app.use(userErr);
app.use(serverErr);

module.exports = {
  app, 
  start: (port) => app.listen(port, () => {
    console.log('server up');
  }),
};