const express = require("express");

const app = express();
const PORT = 3000;

// Custom Middleware
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);

// Route
app.get("/", (req, res) => {
    res.send("Welcome to Express Middleware");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});