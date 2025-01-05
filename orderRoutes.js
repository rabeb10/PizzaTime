// backend/routes/orderRoutes.js
const express = import('express');
const router = express.Router();
const { registerOrder, getOrder, surpriseOrder } = require('../controllers/orderControllers');

// Define the routes
router.post('/', registerOrder); // Register a new order
router.get('/favorite', getOrder); // Get the favorite order
router.post('/surprise', surpriseOrder); // Get a surprise order

module.exports = router;
