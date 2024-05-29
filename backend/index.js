require('dotenv').config();
const express = require('express');
const cors = require('cors');
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

// Allowed origins
const allowedOrigins = [
  'https://66573f52d5f9192af9b8e137--exquisite-zabaione-9f2682.netlify.app',
  'http://localhost:3000'
];

// CORS middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

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
