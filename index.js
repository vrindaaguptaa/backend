const express = require('express');
const cors = require('cors');  // Import cors
const app = express();
const port = process.env.PORT || 5000;
const mongoDB = require('./db');

mongoDB();

// Use CORS Middleware
app.use(cors({
    origin: ["http://localhost:3000", "https://mernapp-front.onrender.com"], // Allow local & deployed frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

// Define Routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app;
