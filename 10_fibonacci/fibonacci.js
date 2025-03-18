const fibonacci = function(position) {

    if (position < 0) return "OOPS"
    if (position == 0) return 0;
    if (position === 1 || position === 2) return 1;

    let previous = 1;
    let current = 1;
    let result;

    for (let i = 3; i <= position; i++) {
        result = previous + current;
        previous = current;
        current = result;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
