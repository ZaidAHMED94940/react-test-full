const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT

// Use CORS to allow requests from your frontend
app.use(cors());

// Route to send the variable
app.get('/api/variable', (req, res) => {
    const myVariable = { value: 'Hello from the Trishit!' };
    res.json(myVariable);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
