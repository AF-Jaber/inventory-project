const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Middleware to protect routes (Must be logged in to report bugs)
const isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        return next();
    }
    res.redirect('/login');
};

router.use(isAuthenticated);

// Routes
router.get('/report-bug', reportController.getBugReport);
router.post('/report-bug', reportController.postBugReport);

module.exports = router;