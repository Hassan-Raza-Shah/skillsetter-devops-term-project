// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
    res.send('App running');
});

// Health route
app.get('/health', (req, res) => {
    res.send('OK');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
