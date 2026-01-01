const BugReport = require('../models/BugReport');

// 1. Show the Form
exports.getBugReport = (req, res) => {
    res.render('reportBug', { message: null });
};

// 2. Handle Submission
exports.postBugReport = async (req, res) => {
    try {
        await BugReport.create({ description: req.body.description });
        // Re-render with success message
        res.render('reportBug', { message: "Report submitted successfully! Thank you." });
    } catch (error) {
        console.log(error);
        res.render('reportBug', { message: "Error submitting report." });
    }
};