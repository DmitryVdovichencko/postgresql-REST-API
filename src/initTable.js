const pool = require('./config');


const initTable = () => {
  pool
    .query(
      'CREATE TABLE IF NOT EXISTS books (ID SERIAL PRIMARY KEY, author VARCHAR(255) NOT NULL,title VARCHAR(255) NOT NULL)',
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

module.exports = {
 initTable
};
