const express = import('express');
const dotenv = import('dotenv');
const connectDB = import('../config/db'); 
import dotenv from 'dotenv';
dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Catch-all route to serve index.html
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Example Routes
app.use('/api/users', require('./routes/orderRoutes'));
app.use('/api/orders', require('./routes/userRoutes'));

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
