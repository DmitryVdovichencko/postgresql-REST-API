import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pool from './config';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const getBooks = (request, response) => {
  pool.query(
    'CREATE TABLE IF NOT EXISTS books (ID SERIAL PRIMARY KEY, author VARCHAR(255) NOT NULL,title VARCHAR(255) NOT NULL)',
  ),
    error => {
      if (error) {
        throw error;
      }
    };
  pool.query(
    'INSERT INTO books (author, title) VALUES ($1, $2)',
    ['Dimon', 'awesomeBook'],
    error => {
      if (error) {
        throw error;
      }
    },
  );
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

export default app;
