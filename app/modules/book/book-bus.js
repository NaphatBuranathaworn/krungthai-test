
exports.cardDiamond = function() {
    let result = '';

    const size = 10;
    const half = size / 2;
    let toLeft = half;
    let toRight = half;

    for (var i = 1; i < size; i++) {
        for (var j = 1; j <= size-1; j++) {
            if (j >= toLeft && j <= toRight) {
                result += '*';
            } else {
                result += ' ';
            }
        }

        if (i < half) {
            toLeft = size/2 - i;
            toRight = size/2 + i;
        } else {
            toLeft++;
            toRight--;
        }

        if (i < size-1) {
            result += '\n';
        }
    }
    console.log(result);
    return result;
}

exports.splitArr = function(text) {

    let result = [];

    const textLength = text.length;
    let mergeChar = '';
    for (let i = 1; i <= textLength; i++) {
        mergeChar += text[i-1];

        if (i > 0 && i%2 === 0) {
            result.push(mergeChar);
            mergeChar = '';
        } else {
            if (i === textLength) {
                mergeChar = '';
                mergeChar += text[i-1] + '*';
                result.push(mergeChar);
            }
        }
    }
    console.log(result);
    return result;
}

exports.sumMultiple = function(n) {
    let sum = 0;

    let arrX = [];
    let arrY = [];
    for(let i=1; i<=n; i++) {
        const x = i * 3;
        const y = i * 5;

        if (x < n && !arrY.includes(x)) {
            arrX.push(x);
        }

        if (y < n && !arrX.includes(y)) {
            arrY.push(y);
        }

        if (i === n) {
            const sumX = arrX.reduce((prev, curr) => {
                return prev + curr;
            });
            const sumY = arrY.reduce((prev, curr) => {
                return prev + curr;
            });

            sum = sumX + sumY;
        }
        
    }
    console.log(sum);
    return sum;    
}