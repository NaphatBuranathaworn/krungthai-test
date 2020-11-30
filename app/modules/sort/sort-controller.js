const bus = require('./sort-bus');

exports.selection = function (req, res) {
    const result = bus.sortSelection(req.body);
    if (result) {
        res.send(JSON.stringify(result));
    }
}

exports.bubble = function (req, res) {
    const result = bus.sortBubble(req.body);
    if (result) {
        res.send(JSON.stringify(result));
    }
}

exports.quickSort = function (req, res) {
    const result = bus.sortQuickSort(req.body);
    if (result) {
        res.send(JSON.stringify(result));
    }
}
