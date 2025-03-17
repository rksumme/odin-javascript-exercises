const removeFromArray = function(array, ...valueToRemove) {
    for (const value of valueToRemove) {
        let index;
        while ((index = array.indexOf(value)) != -1) {
            array.splice(index, 1);
        }
    }
    
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
