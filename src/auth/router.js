'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const validate = require('./middleware/basic');
const { User } = require('./models');

router.post('/signup', createUser);
router.post('/signin', validate);

async function createUser(req, res, next) {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await User.create(req.body);
    console.log(record);
    res.status(200).json(record);
  } catch (e) {
    console.log(e);
    res.status(403).send('Error Creating User');
  }
}

module.exports = router;
