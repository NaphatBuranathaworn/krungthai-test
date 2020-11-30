const bus = require('./price-bus');

exports.plus = function (req, res) {
    console.log('body : ', req.body);
    const bus = new PriceBus();
    const result = bus.plus(req.body.x, req.body.y);
    res.sendStatus(200);
}

exports.minus = function (req, res) {

}

exports.multiply = function (req, res) {

}

exports.divide = function (req, res) {

}

exports.change = function (req, res) {
    if (!req.body.price || !req.body.money) {
        res.sendStatus(400);
    }
    const result = bus.changeMoney(req.body.price, req.body.money);
    res.send(result);
}