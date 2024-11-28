const { getTableData } = require('../models/tableModel');

const renderTable = async (req, res) => {
  const tableName = req.query.tableName; // retrieve table name from query page
  if (!tableName) {
    return res.status(400).send('Table name is required');
  }

  try {
    const rows = await getTableData(tableName);
    res.render('index', { rows, tableName });
  } catch (error) {
    console.error('Error rendering table:', error);
    res.status(500).send(`Error fetching data: ${error.message}`);
  }
};

module.exports = { renderTable };