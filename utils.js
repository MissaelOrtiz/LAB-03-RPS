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
        return 'draw';
    } 
    // loss portion
    else if ((userThrow === 'Bolder' && computerThrow === 'Parchment') || (userThrow === 'Parchment' && computerThrow === 'Shears') || (userThrow === 'Shears' && computerThrow === 'Bolder')) {
        return 'lose';
    } 
    // win portion
    else if ((userThrow === 'Bolder' && computerThrow === 'Shears') || (userThrow === 'Parchment' && computerThrow === 'Bolder') || (userThrow === 'Shears' && computerThrow === 'Parchment')) {
        return 'win';
    }
}

export function printSpaget(tPlays, tWins, tDraws) {
    tPlays++;
    let ratio = Math.ceil((tWins / tPlays) * 100);
    const displayTotalWins = document.querySelector('#total-wins');
    const displayTotalPlays = document.querySelector('#total-plays');
    displayTotalWins.textContent = `Total Wins: ${tWins} Total Draws: ${tDraws} Total Losses ${Math.ceil(tPlays - (tWins + tDraws))}`;
    displayTotalPlays.textContent = `Total Plays: ${tPlays}, W/L: ${ratio}%`;

}