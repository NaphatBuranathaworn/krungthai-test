const express = require('express');
const router = express.Router();

const book_controller = require('./book-controller');

router.get('/', book_controller.index);
router.get('/books/:id', book_controller.book_detail);

router.get('/books/diamond', book_controller.card_diamond);

module.exports = router;