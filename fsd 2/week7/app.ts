import express, { Request, Response } from "express";

const app = express();
const port = 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// GET route - display registration form
app.get("/", (req: Request, res: Response) => {
    res.render("index", {
        title: "User Registration",
        error: null,
        user: null
    });
});

// POST route - accept form data
app.post("/register", (req: Request, res: Response) => {
    const username: string = req.body.username;
    const age: number = Number(req.body.age);

    let errorMessage: string | null = null;

    // Validate username
    if (!username || username.trim().length < 3) {
        errorMessage = "Username must be at least 3 characters long.";
    }

    // Validate age
    else if (!req.body.age || isNaN(age) || age < 18) {
        errorMessage = "You must be at least 18 years old.";
    }

    // Validation failed
    if (errorMessage) {
        return res.render("index", {
            title: "Registration Failed",
            error: errorMessage,
            user: null
        });
    }

    // Validation successful
    res.render("index", {
        title: "Registration Successful",
        error: null,
        user: username
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});