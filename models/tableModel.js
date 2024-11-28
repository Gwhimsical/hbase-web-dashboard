const client = require('../config/hbaseConnection');

// Function to fetch table data
const getTableData = async (tableName) => {
  return new Promise((resolve, reject) => {
    client.table(tableName).scan({ maxVersions: 1 }, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        // Directly resolve the rows as they are structured
        resolve(rows);
      }
    });
  });
};



module.exports = { getTableData };
