// backend/routes/healthData.js
const express = require('express');
const router = express.Router();
const { getHealthData, addHealthData } = require('../controllers/healthDataController');

router.get('/', getHealthData);
router.post('/', addHealthData);

module.exports = router;
