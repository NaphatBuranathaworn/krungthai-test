const express = require('express');
const router = express.Router();

const priceController = require('./price-controller');

router.post('/plus', priceController.plus);
// router.post('/minus')
// router.post('/multiple')
// router.post('/divide')

router.post('/change', priceController.change);

module.exports = router;