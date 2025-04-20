// server.js
const express = require('express');
const cors = require('cors');

const { spawn } = require('node:child_process');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Endpoints for various functions
app.post('/api/upload-json', (req, res) => {
    
});