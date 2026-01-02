const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

// Middleware: Protect Routes
const isAuthenticated = (req, res, next) => {
    if (req.session.userId) return next();
    res.redirect('/login');
};

router.use(isAuthenticated);

router.get('/suppliers', supplierController.getSuppliers);


module.exports = router;