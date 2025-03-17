const sumAll = function(value1, value2) {
    if (!Number.isInteger(value1)) {
        return "ERROR";
    }

    if (!Number.isInteger(value2)) {
        return "ERROR";
    }

    let min = Math.min(value1, value2);
    let max = Math.max(value1, value2);

    if (min < 0) {
        return "ERROR";
    }

    let sum = 0;
    for( let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
