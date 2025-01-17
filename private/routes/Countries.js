const express = require('express');
const router = express.Router();
const pool = require('../connection/connection');

/* GET method */
router.get('/countries', (req, res) => {
  try{
    pool.query('SELECT * FROM countries', function (error, results, fields) {
            if (error) {
                res.send(error);
            }
            res.send(results);
    });
  } catch (error) {
    if (error) console.error(`Error: ${error.message}`);
  }
});

/* Specific GET method */
router.get('/countries/:id', (req, res) => {
  try {
    pool.query(
      `SELECT * FROM countries WHERE id=${req.params.id}`,
      (error, results) => {
        res.send(results);
      }
    );
  } catch (error) {
    console.error(`Error ${error}`);
  }
});

/* POST method */
router.post('/countries', (req, res) => {
  try {
    pool.query(
      `INSERT INTO countries (creationDate, countryName) 
      VALUES ('${req.body.creationDate}',
    '${req.body.countryName}')`,
      () => {
        res.send('Posted successfully.');
      }
    );
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

/* PUT method */
router.put('/countries/:id', (req, res) => {
  try {
    pool.query(
      `
    UPDATE users SET
    street='${req.body.creationDate}',
    street_no='${req.body.countryName}'
    `,
      () => {
        res.send('Updated entry.');
        //pool.end();
      }
    );
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

/* DELETE method */
router.delete('/countries/:id', (req, res) => {
  try {
    pool.query(`DELETE FROM countries WHERE id=${req.params.id}`, () => {
      res.send('Deleted entry.');
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

module.exports = router;