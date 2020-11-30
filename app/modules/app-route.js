const express = require('express');
const router = express.Router();

const controller = require('./app-controller');

router.get('/test', controller.getValue);

module.exports = router;