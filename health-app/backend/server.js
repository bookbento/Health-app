// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON body

// Routes
const userRoutes = require('./routes/users');
const healthDataRoutes = require('./routes/healthData');

app.use('/api/users', userRoutes);
app.use('/api/health-data', healthDataRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
