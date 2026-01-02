# Inventory Management System

A full-stack web application for managing inventory, built with Node.js, Express, MongoDB, and EJS templates.

## 🚀 Features

- **User Authentication**: Secure login and registration system with password hashing
- **Session Management**: Persistent user sessions stored in MongoDB
- **Product Management**: Add, edit, delete, and view products
- **Category Management**: Organize products by categories
- **Supplier Management**: Manage supplier information and contacts
- **Dashboard**: Overview of inventory statistics
- **Dashboard**: Overview of inventory statistics
- **Bug Reporting**: Built-in bug reporting system for users
- **Responsive Design**: Mobile-friendly interface using Bootstrap
- **Real-time Updates**: Dynamic content loading with EJS

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcrypt** - Password hashing
- **express-session** - Session management
- **connect-mongo** - MongoDB session store
- **express-ejs-layouts** - EJS layout management
- **body-parser** - Request body parsing

### Frontend
- **EJS** - Templating engine
- **Bootstrap 5** - CSS framework
- **JavaScript** - Client-side interactions

### Development Tools
- **Nodemon** - Auto-restart server during development
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before running this application, make sure you have:
- Node.js (v14 or higher)
- MongoDB (local installation or cloud service like MongoDB Atlas)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AF-Jaber/inventory-project.git
   cd inventory-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     PORT=3000
     MONGO_URI=mongodb://localhost:27017/inventory
     SESSION_SECRET=your-secret-key-here
     ```

4. **Start MongoDB**
   - Make sure MongoDB is running on your system
   - Or update `MONGO_URI` to point to your MongoDB Atlas cluster

5. **Run the application**
   ```bash
   # Development mode (with nodemon)
   npm start

   # Or run directly
   node app.js
   ```

6. **Access the application**
   - Open your browser and go to `http://localhost:3000`
   - Register a new account or login

## 📁 Project Structure

```
inventory-project/
├── config/
│   └── db.js                    # Database connection
├── controllers/
│   ├── authController.js        # Authentication logic
│   ├── inventoryController.js   # Product management logic
│   ├── reportController.js      # Bug reporting logic
│   └── supplierController.js    # Supplier management logic
├── models/
│   ├── BugReport.js             # Bug report schema
│   ├── Category.js              # Category schema
│   ├── Product.js               # Product schema
│   ├── Supplier.js              # Supplier schema
│   └── User.js                  # User schema
├── routes/
│   ├── authRoutes.js            # Authentication routes
│   ├── inventoryRoutes.js       # Product routes
│   ├── reportRoutes.js          # Bug report routes
│   └── supplierRoutes.js        # Supplier routes
├── views/
│   ├── partials/
│   │   └── sidebar.ejs          # Navigation sidebar
│   ├── categories.ejs           # Category management
│   ├── dashboard.ejs            # Main dashboard
│   ├── editProduct.ejs          # Edit product form
│   ├── login.ejs                # Login page
│   ├── products.ejs             # Product listing
│   ├── register.ejs             # Registration page
│   ├── reportBug.ejs            # Bug reporting form
│   └── suppliers.ejs            # Supplier listing
├── public/
│   ├── css/
│   │   └── bootstrap.min.css    # Bootstrap styles
│   └── images/
│       └── suppliers/           # Supplier logos
├── .env                         # Environment variables
├── app.js                       # Main application file
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🎯 Usage

### User Registration
1. Navigate to `/register`
2. Fill in username and password
3. Click "Register"

### Login
1. Go to `/login`
2. Enter your credentials
3. Access the dashboard

### Managing Products
- **View Products**: Navigate to `/products` to see all inventory
- **Add Product**: Click "Add New Product" and fill the form
- **Edit Product**: Click "Edit" next to any product
- **Delete Product**: Click "Delete" and confirm

### Managing Suppliers
- **View Suppliers**: Navigate to `/suppliers` to see all supplier contacts
- Supplier information includes name, email, phone, website, and address

### Categories
- View and manage product categories from the sidebar

### Bug Reporting
- Use the "Report Bug" feature to submit issues

## 🔗 API Endpoints

### Authentication
- `GET /login` - Login page
- `POST /login` - Process login
- `GET /register` - Registration page
- `POST /register` - Process registration
- `POST /logout` - Logout user

### Products
- `GET /products` - List all products
- `GET /products/add` - Add product form
- `POST /products` - Create new product
- `GET /products/edit/:id` - Edit product form
- `POST /products/edit/:id` - Update product
- `POST /products/delete/:id` - Delete product

### Suppliers
- `GET /suppliers` - List all suppliers

### Dashboard
- `GET /dashboard` - Main dashboard
- `GET /` - Redirects to login or dashboard

### Reports
- `GET /report` - Bug report form
- `POST /report` - Submit bug report

## 🔒 Security Features

- **Password Hashing**: Uses bcrypt for secure password storage
- **Session Security**: Sessions stored in database with expiration
- **Input Validation**: Server-side validation for all forms
- **CSRF Protection**: Built-in session-based CSRF protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/AF-Jaber/inventory-project/issues) page
2. Use the built-in bug reporting feature in the app
3. Contact the maintainer

## 🔄 Future Enhancements

- [ ] User roles and permissions
- [ ] Inventory reports and analytics
- [ ] Barcode scanning integration
- [ ] Multi-language support
- [ ] API endpoints for mobile app
- [ ] Email notifications
- [ ] Backup and restore functionality

---

**Built with ❤️ using Node.js**
