import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pool from './config';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const getBooks = (request, response) => {
  pool.query('SELECT * FROM books', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addBook = (request, response) => {
  const { author, title } = request.body;

  pool.query('INSERT INTO books (author, title) VALUES ($1, $2)', [author, title], error => {
    if (error) {
      throw error;
    }
    response.status(201).json({ status: 'success', message: 'Book added.' });
  });
};

app
  .route('/books')
  // GET endpoint
  .get(getBooks)
  // POST endpoint
  .post(addBook);

// Start server
const server = app.listen(process.env.PORT || 3002, () => {
  console.log('Server listening on 3002');
  server.close(() => {
    console.log('Server closed');
  });
});

export default app;
