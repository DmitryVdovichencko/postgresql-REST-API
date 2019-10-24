import request from 'supertest';
import app from '../src/app';

describe('Get all comments from server', () => {
  it('Gets all comments endpoint', async (done) => {
    // Sends GET Request to /test endpoint
    await request(app)
      .get('/comments')
      .expect(200);

    done();
  });
});
describe('Get comments by slug from server', () => {
  it('Gets comments by slug endpoint', async (done) => {
    // Sends GET Request to /test endpoint
    await request(app)
      .get('/comments/:how-to-bake-a-server')
      .expect(200);

    done();
  });
});
describe('Update comment', () => {
  it('Update comment', async (done) => {
    const updateComment = {
      name: 'update comment',
      text: 'update awesome post!',
      slug: 'how-to-bake-a-server',
      parentCommentId: 0,
    };
    await request(app)
      .put('/comments/0')
      .send(updateComment)
      .expect(200);

    done();
  });
});

describe('Delete comment', () => {
  it('Delete comment', async (done) => {
    await request(app)
      .delete('/comments/0')
      .expect(200);

    done();
  });
});

describe('Send comment to server', () => {
  it('Creating comments endpoint', async (done) => {
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
