// backend/routes/userRoutes.js
const express = import('express');
const router = express.Router();
const { registerUser, loginUser } = import('../controllers/userController');

// Define routes
router.post('/register', registerUser); // Route to register a user
router.post('/login', loginUser); // Route for user login

module.exports = router;
