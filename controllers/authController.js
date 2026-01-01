const User = require('../models/User');
const bcrypt = require('bcrypt');

// 1. Show Login Page (Pass no error initially)
exports.getLogin = (req, res) => {
    res.render('login', { error: null });
};

// 2. Show Register Page (Pass no error initially)
exports.getRegister = (req, res) => {
    res.render('register', { error: null });
};

// 3. Handle Registration Logic
exports.postRegister = async (req, res) => {
    const { username, password } = req.body;
    try {
        await User.create({ username, password });
        // Success? Go to login
        res.redirect('/login'); 
    } catch (error) {
        console.log(error);
        // Failure? Stay on Register page and show error
        res.render('register', { error: "Username already taken. Try another one." });
    }
};

// 4. Handle Login Logic
exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                req.session.userId = user._id; 
                return res.redirect('/dashboard');
            }
        }
        // Failure? Stay on Login page and show error
        res.render('login', { error: "Invalid Username or Password" });
    } catch (error) {
        console.log(error);
        res.render('login', { error: "An error occurred. Please try again." });
    }
};

// 5. Handle Logout
exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
};