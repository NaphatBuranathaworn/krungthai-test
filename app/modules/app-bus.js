
exports.calculate = function(arr) {
    let result = 0;
    let x = 0;
    let y = 0;

    let z = arr.length-1;
    for (var i = 0; i < arr.length; i++) {

        x = x + arr[i][i];
        y = y + arr[z][i];

        z--;
    }
    result = x - y;
    if (result < 0) {
        result = result * -1;
    }
    console.log(result);
    return result;
}