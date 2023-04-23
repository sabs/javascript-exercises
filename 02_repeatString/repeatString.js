const repeatString = function (str='', num=0) {
    let repeatedStr = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (let x = 0; x < num; x++) {
        repeatedStr += str;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
