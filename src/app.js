import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pool from './config';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';

const app = express();
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // 5 requests,
});
const postLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 1,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(limiter);

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

  pool.query('INSERT INTO books (author, title) VALUES ($1, $2)', [author, title], (error) => {
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

export default app;
