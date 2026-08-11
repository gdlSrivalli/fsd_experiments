const express = require("express");

const app = express();
const PORT = 3000;

// GET Request - Send JSON
app.get("/students", (req, res) => {
    res.json({
        id: 101,
        name: "Jahnavi",
        course: "AI & DS"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});