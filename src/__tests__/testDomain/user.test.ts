
import request from 'supertest';

import app from '../../app';

describe('User', () => {

  it('Status API', async () => {
    const response = await request(app).get('/api/v1/healthcheck').send();
    console.log(response.body);
  });

  it('Login', async () => {
    const response = await request(app).post('/api/v1/users/login').send();
    console.log(response.body);
  });

  it('Logout', async () => {
    const response = await request(app).post('/api/v1/users/logout').send();
    console.log(response.body);
  });
}
);
