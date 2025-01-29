const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // for cross origin requests
app.use(bodyParser.json());

// Home Page,
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Home Page!" });
});

// Signup Page
app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  // To-Do - save user info to database at this point
  res.json({
    message: "User signed up successfully!",
    user: { username, email },
  });
});

// Login Page
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // To-Do - Check user credentials against database
  res.json({ message: "User logged in successfully!", user: { email } });
});

// Admin Login
app.post("/admin/login", (req, res) => {
  const { email, password } = req.body;
  // To-Do - Check admin credentials
  res.json({ message: "Admin logged in successfully!", user: { email } });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
