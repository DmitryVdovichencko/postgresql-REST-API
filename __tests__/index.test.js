import request from 'supertest';
import app from '../src/app';

describe('Get books from server', () => {
  it('Gets the books endpoint', async (done) => {
    // Sends GET Request to /test endpoint
    await request(app)
      .get('/books/')
      .expect(200);

    done();
  });
});

describe('Send book to server', () => {
  it('Gets the books endpoint', async (done) => {
    // Sends GET Request to /test endpoint
    const newBook = {
      title: 'Game of Thrones',
      author: 'George R. R. Martin',
    };
    await request(app)
      .post('/books')
      .send(newBook)
      .expect(201);

    done();
  });
});
