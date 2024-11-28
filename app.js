require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const tableRoutes = require('./routes/tableRoutes');
const client = require('./config/hbaseConnection');

// create express app
const app = express()

// view engine
app.set('view engine', 'ejs');
app.set("views", "./views");

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// logger
app.use((req, res, next) => {
  console.log(
    `METHOD: ${req.method} -- PATH: ${req.path}  --  IP: ${req.ip}`
  );
  next();
});

app.use('/', tableRoutes);

app.get('/about', (req, res) => {
  res.render('about', { title: 'About this project', content: 'This is more or less the project report' });
});




// Start the server
app.listen(3000, () => {
    console.log(`Server started!`);
  });