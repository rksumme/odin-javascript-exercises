const palindromes = function (input) {
    inputLower = input.toLowerCase();
    clean = inputLower.replace(/[^\w\s\']|_/g,"").replace(/\s+/g,"");

    forwardArray = Array.from(clean);

    reversedArray = [];

    for(let i = forwardArray.length - 1; i >= 0; i--) {
        reversedArray.push(forwardArray[i]);
    }

    for(let x = 0; x < forwardArray.length; x++) {
        if (forwardArray[x] !== reversedArray[x])
            return false;

    }

    return true;

};

// Do not edit below this line
module.exports = palindromes;
