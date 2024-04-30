const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! Welcome to my Node.js application running on Kubernetes!');
});

// Simple API to return JSON data
app.get('/api/data', (req, res) => {
    res.json({
        message: 'Data fetched successfully',
        data: [1, 2, 3, 4, 5]
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
