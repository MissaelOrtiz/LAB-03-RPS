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
    if (userThrow === computerThrow) {
        return 0;
    } else if (userThrow === 'Bolder' && computerThrow === 'Parchment') {
        return -1;
    } else if (userThrow === 'Bolder' && computerThrow === 'Shears') {
        return +1;
    } else if (userThrow === 'Parchment' && computerThrow === 'Bolder') {
        return +1;
    } else if (userThrow === 'Parchment' && computerThrow === 'Shears') {
        return -1;
    } else if (userThrow === 'Shears' && computerThrow === 'Parchment') {
        return +1;
    } else if (userThrow === 'Shears' && computerThrow === 'Bolder') {
        return -1;
    }
}