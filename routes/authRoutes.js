const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);

router.get('/logout', authController.logout);

// Temporary Dashboard Route (Until we build the real one)

// Redirect root to login
router.get('/', (req, res) => {
    res.redirect('/login');
});

module.exports = router;