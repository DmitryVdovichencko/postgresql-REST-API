import dotenv from 'dotenv';
//allow you to use those environment variables

dotenv.config();

const { Pool } = require('pg');
// in an environment like Heroku, NODE_ENV will be set to production so you can have different behavior between environments
const isProduction = process.env.NODE_ENV === 'production';
//creating a pattern:  postgresql://USER:PASSWORD@HOST:PORT/DATABASE
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
});

export default pool;
