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