import request from 'supertest';
import app from '../src/app';

describe('Get comments from server', () => {
  it('Gets the comments endpoint', async (done) => {
    // Sends GET Request to /test endpoint
    await request(app)
      .get('/comments')
      .expect(200);

    done();
  });
});

describe('Send comment to server', () => {
  it('Posting the comments endpoint', async (done) => {
    // Sends GET Request to /test endpoint
    const newComment = {
      name: 'new comment',
      text: 'awesome post!',
      slug: 'how-to-bake-a-server',
      parentCommentId: 0,
    };
    await request(app)
      .post('/comments')
      .send(newComment)
      .expect(201);

    done();
  });
});
