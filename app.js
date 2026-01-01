require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo').default || require('connect-mongo');
const app = express();
// 1. Database Connection (Importing from config)
const connectDB = require('./config/db');
connectDB();

// 2. Middleware (Settings)
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json()); // Parse JSON
app.use(express.static('public')); // For CSS/Images
app.set('view engine', 'ejs'); // Use EJS for HTML

// 3. Session Setup (Cookies) 
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
        mongoUrl: process.env.MONGO_URI
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

// 4. Routes
app.use('/', require('./routes/authRoutes')); 
app.use('/', require('./routes/inventoryRoutes'));
app.use('/', require('./routes/reportRoutes'));

// 5. Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});