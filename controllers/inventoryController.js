const Product = require('../models/Product');
const Category = require('../models/Category');
exports.getDashboard = async (req, res) => {
    // Note: We will handle the "is logged in" check in the Routes (Cleaner)
    
    try {
        const products = await Product.find();

        const totalProducts = products.length;
        const totalStock = products.reduce((sum, item) => sum + item.quantity, 0);
        const totalValue = products.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const lowStockItems = products.filter(item => item.quantity < 5);

        res.render('dashboard', { 
            totalProducts, 
            totalStock, 
            totalValue,
            lowStockItems
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};


// --- Products LOGIC --
// CRUD Operations for Products :


// 1. Show All Products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ lastUpdated: -1 });
        const categories = await Category.find(); // FETCH CATEGORIES
        
        res.render('products', { products, categories }); // SEND BOTH
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};
// 2. Add New Product
exports.addProduct = async (req, res) => {
    // Added 'image' to the list
    const { name, category, price, quantity, image } = req.body; 
    try {
        await Product.create({ name, category, price, quantity, image });
        res.redirect('/products');
    } catch (error) {
        console.log(error);
        res.send("Error adding product");
    }
};

// 3. Delete Product
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.redirect('/products');
    } catch (error) {
        res.send("Error deleting product");
    }
};

// 4. Show Edit Form
exports.getEditProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        const categories = await Category.find(); // FETCH CATEGORIES
        
        res.render('editProduct', { product, categories }); // SEND BOTH
    } catch (error) {
        res.redirect('/products');
    }
};

// 5. Handle Update Logic
exports.updateProduct = async (req, res) => {
    // Added 'image' to the list
    const { name, category, price, quantity, image } = req.body;
    try {
        await Product.findByIdAndUpdate(req.params.id, { name, category, price, quantity, image });
        res.redirect('/products');
    } catch (error) {
        res.send("Error updating product");
    }
};



// --- CATEGORIES LOGIC ---

// 1. Show Categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.render('categories', { categories });
    } catch (error) {
        res.send("Error loading categories");
    }
};

// 2. Add Category
exports.addCategory = async (req, res) => {
    try {
        await Category.create({ name: req.body.name });
        res.redirect('/categories');
    } catch (error) {
        res.send("Error: Category might already exist.");
    }
};

// 3. Delete Category
exports.deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.redirect('/categories');
    } catch (error) {
        res.send("Error deleting category");
    }
};