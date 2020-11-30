const bus = require('./book-bus');


exports.index = function(req, res) {
    
}

exports.book_detail = function(req, res) {
    res.send('Book detail: ' + req.params.id);
}

exports.card_diamond = function(req, res) {
    res.send(bus.cardDiamond);
}

