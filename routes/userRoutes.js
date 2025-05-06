const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const protect = require('../middlewares/authMiddleware');

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

// Protected Route
router.get('/profile', protect, async (req, res) => {
  const user = await User.findByPk(req.user.id);
  res.status(200).json({ name: user.name, email: user.email });
});

module.exports = router;
