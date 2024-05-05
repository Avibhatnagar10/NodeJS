const express = require('express');
const app = express();
const PORT = 3000;

// Middleware function to log request method and URL
const logMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Call next middleware in the chain
};

// Middleware function to add a custom header
const customHeaderMiddleware = (req, res, next) => {
    res.setHeader('X-Custom-Header', 'Hello from middleware!');
    next(); // Call next middleware in the chain
};

// Apply middleware globally to all routes
app.use(logMiddleware);
app.use(customHeaderMiddleware);

// Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
