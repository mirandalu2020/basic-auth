'use strict';

const validate = require('./middleware/basic');
const base64 = require('base-64');
const bcrypt = require('bcrypt');

// const { sequelize } = require('./models');

// beforeAll(async() => {
//   await sequelize.sync();
// });
// afterAll(async() => {
//   await sequelize.drop();
// });

describe('Does the middleware function', () => {

  test('The middleware function should send a basic header', async () => {

    const login = {
      username: 'testuser',
      password: 'testpassword',
    };

    const request = {
      headers: {
        authorization: `Basic ${login}`,
      }};

    const response = {
      send: jest.fn(() => response),
      status: jest.fn(() => response),
    };

    const nextFunction = jest.fn();
    await validate(request, response, nextFunction);

    expect(response.status).toHaveBeenCalledWith(403);
  });

  // test('Do the routes assert the requirements signin', async() => {
  //   const signInRequest = {
  //     headers: { Authorization: `Basic ${authString}`}
  //   }
  // const signUpRequest = {
  //   body: {usersname, password}
  // }


  // });

});