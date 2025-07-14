const express = require('express');
const cors = require('cors');
require('dotenv').config();
const productsRouter = require('./routes/products');

const pool = require('./database');



const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/products', productsRouter);

// basic route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});