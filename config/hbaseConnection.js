const hbase = require('hbase');

// configure HBase client
const client = hbase({
  host: process.env.HOST,
  port: process.env.PORT
});

module.exports = client;
