const express = require('express');
const router = express.Router();

const controller = require('./sort-controller');

router.post('/selection', controller.selection);
router.post('/bubble', controller.bubble);
router.post('/quicksort', controller.quickSort);


module.exports = router;