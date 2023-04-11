'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
const { sequelize } = require('./../src/auth/models');

beforeAll(async() => {
  await sequelize.sync();
});
afterAll(async() => {
  await sequelize.drop();
});

describe('Testing the  HTTP REST client', () => {
  test('Should post 404 on a bad route', async () => {
    const response = await request.get('/bad-route');
    expect(response.status).toEqual(404);
  });

  test('Should post 404 on a bad method', async () => {
    const response = await request.patch('/signin');
    expect(response.status).toEqual(404);
  });

  test('Should post a success status ', async () => {
    const response = await request
      .post('/signup')
      .send({
        'username': 'test-user',
        'password': 'thisisatestpw',
      });
    // console.log(response.header);
    expect(response.status).toEqual(200);
  },
  );

  test('Should post a success status ', async () => {
    const response = await request
      .post('/signin')
      .auth('test-user', 'thisisatestpw');
    // console.log(response.body);
    expect(response.status).toEqual(200);
  },
  );
},
);

