
exports.sortSelection = function (arr) {

    let minIndex = 0;
    let n = arr.length;

    for (var i = 0; i < n - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < n; j++) {

            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }

            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp

        }
    }

    return arr;
}

exports.sortBubble = function (arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

exports.sortQuickSort = function (arr) {

    const n = arr.length;
    const low = 0;
    const high = n - 1;

    sort(arr, low, high);

    return arr;
}

function sort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        sort(arr, low, pi - 1);
        sort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

exports.fibonacci = function (n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        if (i > 1) {
            arr[i] = arr[i - 1] + arr[i - 2];
        } else {
            arr[i] = i;
        }
    }
    return arr[n];
}

exports.findSumFibonacci = function (value) {
    let sum = 0;
    
    let n = 0;
    let x = 0;
    let y = 1;
    do {
        if (n%2 === 0) {
            sum = sum + n;
        }
        n = x + y;
        x = y;
        y = n;
    } while (n < value);
    

    console.log(sum);
    return sum;
}