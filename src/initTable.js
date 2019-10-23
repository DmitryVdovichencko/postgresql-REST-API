import pool from './config';

const initTable = () => {
  pool
    .query(
      'CREATE TABLE IF NOT EXISTS comments (ID SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL,date TIMESTAMPTZ DEFAULT Now(),slug VARCHAR(255) NOT NULL,parent_comment_id INTEGER,text VARCHAR(5000) NOT NULL)',
    )
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};
initTable();
export default initTable;
