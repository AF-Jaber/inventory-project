const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Middleware to protect these routes (User must be logged in)
const isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        return next();
    }
    res.redirect('/login');
};

// Apply protection to all routes below
router.use(isAuthenticated);

// Dashboard
router.get('/dashboard', inventoryController.getDashboard);

// Products (We will build these next)
// router.get('/products', inventoryController.getProducts);



// --- Products ---

//CRUD:

// READ
router.get('/products', inventoryController.getProducts);

// CREATE
router.post('/products/add', inventoryController.addProduct);

// DELETE (Using GET for simplicity, or we can use POST inside a form)
router.post('/products/delete/:id', inventoryController.deleteProduct);

// UPDATE
router.get('/products/edit/:id', inventoryController.getEditProduct);
router.post('/products/edit/:id', inventoryController.updateProduct);



// --- CATEGORIES ---
router.get('/categories', inventoryController.getCategories);
router.post('/categories/add', inventoryController.addCategory);
router.post('/categories/delete/:id', inventoryController.deleteCategory);


module.exports = router;