


exports.plus = function(x, y) {
    return x + y;
}

exports.minus = function(x, y) {
    return x - y;
}

exports.multiply = function(x, y) {
    return x * y;
}

exports.divide = function(x, y) {
    return x / y;
}

exports.mod = function(x, y) {
    return x % y;
}

exports.countBank = function(bankType, money) {
    return Math.round(this.divide(money, bankType));
}

exports.changeMoney = function(price, money) {
    const listBank = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    const resultObj = {};
    let change = money - price;

    if (change <= 0) {
        return 0;
    }

    for (let i = 0; i < listBank.length; i++) {
        if (change >= listBank[i]) {
            const count = this.countBank(listBank[i], change);
            if (count > 0) {
                resultObj[listBank[i]] = count;
            }
            change = change % listBank[i];
        }
    }

    return resultObj;
}


