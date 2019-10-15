import request from 'supertest';
import app from '../src/app';

describe('Server Endpoints', () => {
  it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint

    await request(app)
      .get('/books')
      .expect(200);

    done();
  });
});
