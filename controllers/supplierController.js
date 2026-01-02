const Supplier = require('../models/Supplier');

// 1. Show All Suppliers
exports.getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.render('suppliers', { suppliers });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};

