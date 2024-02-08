const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware for parsing JSON and URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files like CSS, images
app.use(express.static('public'));

// A route for serving the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
    // Access submitted form data
    const { username, password } = req.body;

    // Validate data
    if (!username) {
        return res.status(400).send('Pretty please enter your username');
    }

    // *Note*  here is typically where it validates the data further and save it to a database
    // such as username and password for this instance
    // Send a response back to the client
    res.send(`Form submitted successfully! Username: ${username}`);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
