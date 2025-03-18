const findTheOldest = function(array) {
    const thisYear = new Date().getFullYear();

    const oldest = array.sort(function(a,b) {
        const aLived = (a.yearOfDeath || thisYear) - a.yearOfBirth;
        const bLived = (b.yearOfDeath || thisYear) - b.yearOfBirth;

        return bLived - aLived;
    })

    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
