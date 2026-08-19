const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    session({
        secret: "mySecretKey",
        resave: false,
        saveUninitialized: false
    })
);

app.set("view engine", "ejs");

// ------------------------------------
// Authentication Middleware
// ------------------------------------
function authMiddleware(req, res, next) {

    if (req.session.isLoggedIn) {
        // User is authenticated
        next();
    } else {
        // User is not authenticated
        res.redirect("/login");
    }
}

// ------------------------------------
// Public Route: Login Page
// ------------------------------------
app.get("/login", (req, res) => {
    res.render("login", { error: null });
});

// ------------------------------------
// Implement Login
// ------------------------------------
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    // Basic hardcoded login
    // Username: admin
    // Password: 123
    if (username === "admin" && password === "123") {

        // Store login information in session
        req.session.isLoggedIn = true;
        req.session.username = username;

        // Create a custom cookie
        res.cookie("lastVisit", new Date().toLocaleTimeString());

        // Redirect to dashboard
        res.redirect("/dashboard");

    } else {

        // Invalid login
        res.render("login", {
            error: "Invalid credentials"
        });
    }
});

// ------------------------------------
// Private Route: Dashboard
// ------------------------------------
app.get("/dashboard", authMiddleware, (req, res) => {

    // Read cookie
    const lastVisit = req.cookies.lastVisit || "First time";

    // Display session data
    res.render("dashboard", {
        user: req.session.username,
        lastVisit: lastVisit
    });
});

// ------------------------------------
// Logout
// ------------------------------------
app.get("/logout", (req, res) => {

    req.session.destroy(() => {

        // Clear session cookie
        res.clearCookie("connect.sid");

        // Redirect to login
        res.redirect("/login");
    });
});

// ------------------------------------
// Start Server
// ------------------------------------
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});