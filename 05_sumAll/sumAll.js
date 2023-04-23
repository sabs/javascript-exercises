const sumAll = function (startNum, endNum) {
    if (startNum > endNum) {
        [startNum, endNum] = [endNum, startNum];
    }
    if (typeof(startNum) != 'number' || typeof(endNum) != 'number') {
        return 'ERROR';
    } else if (startNum < 0 || endNum < 0) {
        return 'ERROR';
    }  else {
        let sum = 0;
        for (let x = startNum; x <= endNum; x++) {
            sum += x;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
