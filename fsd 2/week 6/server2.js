const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// POST
app.post("/students", (req, res) => {
    res.json({
        message: "Student Added Successfully",
        data: req.body
    });
});

// PUT
app.put("/students/:id", (req, res) => {
    res.json({
        message: `Student ${req.params.id} Updated`,
        data: req.body
    });
});

// DELETE
app.delete("/students/:id", (req, res) => {
    res.json({
        message: `Student ${req.params.id} Deleted`
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});