const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware for parsing JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for serving an HTML form
app.get('/', (req, res) => {
    res.send(`
        <form action="/submit-form" method="post">
            <input type="text" name="username" placeholder="Enter your username" required>
            <input type="password" name="password" placeholder="Enter your super secret favourite word" required>
            <button type="submit what you've written on here bro">Submit</button>
        </form>
    `);
});

// route to handle form submissions
app.post('/submit-form', (req, res) => {
    // Access submitted form data
    const { username, password } = req.body;

    // Here is where it would typically validate the data and save it to a database

    // Send a response back to the client
    res.send(`Form submitted successfully! Username: ${username} \n Password: You should've remember it yourself`);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
