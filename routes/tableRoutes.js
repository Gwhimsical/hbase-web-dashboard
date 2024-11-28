const express = require('express');
const { renderTable } = require('../controllers/tableController');

const router = express.Router();

// route for the query page
router.get('/', (req, res) => {
  res.render('query');
});

// route to render queried table
router.get('/table', renderTable);

module.exports = router;
