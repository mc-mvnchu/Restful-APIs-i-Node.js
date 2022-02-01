// Require express
const express = require("express");
// Initialize express
const app= express();
const PORT = 8080;
// Parse JSON
app.use(express.json());
// parse URL encoded data
app.use(express.urlencoded({ extended: true }));
// create a server
app.listen(PORT, () => {
    console.log(`Server running on POrt $(PORT)`);
});

// Set Up Routes
app.post('/create', (req, res) => {
    // Create User
});
app.get('/users', (req, res) => {
    // Retrieves all users
});
app.get('/user/:userID', (req, res) => {
    // Returns a user by ID
});
app.put('/user/:userID', (req, res) => {
    // Update a user by ID
});
app.delete('/delete/:user', (req, res) => {
    // Delete a user by ID
});
app.delete('/users', (req, res) => {
    // Delete all Users
});

// Performing CRUD Operations in Node.js
app.post("/create", (req, res) => {
    // Check if the request body is empty
    if (!Object.keys(req.body).length) {
        return res.status(400).json({
            message: "Request body cannot be empty",
        });
    }
    // Use object destructing to get name and age
    const { name, age } = req.body;
    if (!name || !age) {
        res.status(400).json({
            message: "Ensure you sent both name and age",
        });
    }
    const newUser = {
        id: users.length + 1,
        name,
        age,
    };
    try {
        users.push(newUser);
        res.status(201).json({
            message: "Successfully created a new user",
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create user",
        });
    }
});

// How to Read Users
app.get('/users', (req, res) => {
    try {
        res.status(200).json({
            users
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve all users",
        });
    }
});

// How to retrieve one user only
app.get('/users/:usersID', (req, res) => {
    const id = parseInt(req.params.userID);
    console.log(id);
    try {
        let user = users.find((user) => user.id === id);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        res.status(200).json({
            user,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve user",
        });
    }
});