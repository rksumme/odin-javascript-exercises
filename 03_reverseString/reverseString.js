const reverseString = function(string) {
    const array = string.split('');

    const reversed = [];

    for(let i = array.length - 1; i >=0; i--) {
        reversed.push(array[i]);
    }

    let newString = reversed.join('');

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
