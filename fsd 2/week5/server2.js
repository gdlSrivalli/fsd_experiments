const express = require("express");

const app = express();
const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Express!");
});

// Route Parameters
// Example: http://localhost:3000/user/101
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Multiple Route Parameters
// Example: http://localhost:3000/product/10/laptop
app.get("/product/:id/:name", (req, res) => {
    const { id, name } = req.params;
    res.send(`Product ID: ${id}, Product Name: ${name}`);
});

// Query Parameters
// Example: http://localhost:3000/search?name=Jahnavi&age=19
app.get("/search", (req, res) => {
    const { name, age } = req.query;
    res.send(`Name: ${name}, Age: ${age}`);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});