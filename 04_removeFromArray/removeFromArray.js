const removeFromArray = function (arr, item, ...args) {
    let items = Array.from(args);
    items.unshift(item);

    items.forEach(function (e) {
        let index = arr.indexOf(e);
        if (index >= 0) {
            arr.splice(index, 1);
        }
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
