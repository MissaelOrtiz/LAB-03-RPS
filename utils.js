export function getThrow(someNumber) {
    if (someNumber === 3) {
        return 'Bolder';
    }
    if (someNumber === 2) {
        return 'Parchment';
    }
    if (someNumber === 1) {
        return 'Shears';
    }
}

export function compareThrow(userThrow, computerThrow) {
    // draw portion
    if (userThrow === computerThrow) {
        return 0;
    } 
    // loss portion
    else if ((userThrow === 'Bolder' && computerThrow === 'Parchment') || (userThrow === 'Parchment' && computerThrow === 'Shears') || (userThrow === 'Shears' && computerThrow === 'Bolder')) {
        return -1;
    } 
    // win portion
    else if ((userThrow === 'Bolder' && computerThrow === 'Shears') || (userThrow === 'Parchment' && computerThrow === 'Bolder') || (userThrow === 'Shears' && computerThrow === 'Parchment')) {
        return +1;
    }
}