const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    website: { type: String, default: '#' },
    address: { type: String, required: true },
    logo: { type: String, default: '' } // URL to logo
});

module.exports = mongoose.model('Supplier', SupplierSchema);