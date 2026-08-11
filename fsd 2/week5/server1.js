const express = require("express");

const app = express();
const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Express Server!");
});

// About Route
app.get("/about", (req, res) => {
    res.send("This is the About Page.");
});

// Contact Route
app.get("/contact", (req, res) => {
    res.send("This is the Contact Page.");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});