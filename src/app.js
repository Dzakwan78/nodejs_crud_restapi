const express = require('express');
const app = express();

// middleware untuk membaca JSON
app.use(express.json());

// routes
app.use('/categories', require('./routes/categoryRoutes'));
app.use('/products', require('./routes/productRoutes'));

app.get('/', (req, res) => {
  res.json({ message: 'API berjalan' });
});

module.exports = app;
