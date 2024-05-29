require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./db');

// Load database and set global variables
db((err, data, CatData) => {
  if (err) {
    console.error('Error loading database:', err);
    return;
  }
  global.foodData = data;
  global.foodCategory = CatData;
  console.log('Database loaded successfully');
});

// Middleware to enable CORS for a specific origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Middleware to parse JSON requests
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Auth routes
app.use('/api/auth', require('./Routes/Auth'));

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
