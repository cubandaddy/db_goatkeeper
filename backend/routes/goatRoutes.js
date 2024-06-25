const express = require('express');
const router = express.Router();
const goatController = require('../controllers/goatController');

router.post('/goats', goatController.addGoat);

module.exports = router;
