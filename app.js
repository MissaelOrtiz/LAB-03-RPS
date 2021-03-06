// import functions and grab DOM elements
import { compareThrow, getThrow, printSpaget } from './utils.js';
const displayTotalWins = document.querySelector('#total-wins');
const displayTotalPlays = document.querySelector('#total-plays');
const displayFeedback = document.querySelector('#feedback');
const buttonSubmit = document.querySelector('#submit-button');
const buttonReset = document.querySelector('#reset-button');
// initialize state
let totalPlays = 0;
let totalWins = 0;
let totalDraws = 0;

// set event listeners to update state and DOM
buttonSubmit.addEventListener('click', () => {
    const selectedThrow = document.querySelector('input:checked');
    const userThrow = selectedThrow.value;
    let oppThrow = Math.ceil(Math.random() * 3);
//  let ratio
//  let losses = Math.ceil(totalPlays - (totalWins + totalDraws));
    if (compareThrow(userThrow, getThrow(oppThrow)) === 'win') {
        totalWins++;
        totalPlays++;
        printSpaget(totalPlays, totalWins, totalDraws);
    // All code below was refactored pringSpaget()   
    // totalPlays++;
    // ratio = Math.ceil((totalWins / totalPlays) * 100);
    // displayTotalWins.textContent = `Total Wins: ${totalWins} Total Draws: ${totalDraws} Total Losses: ${losses}`;
    // displayTotalPlays.textContent = `Total Plays: ${totalPlays}, W/L: ${ratio}%`;
        displayFeedback.textContent = `You Won!`;
    } else if (compareThrow(userThrow, getThrow(oppThrow)) === 'lose') {
        totalPlays++;
        printSpaget(totalPlays, totalWins, totalDraws);
    // totalPlays++;
    // ratio = Math.ceil((totalWins / totalPlays) * 100);
    // displayTotalWins.textContent = `Total Wins: ${totalWins} Total Draws: ${totalDraws} Total Losses: ${Math.ceil(totalPlays - (totalWins + totalDraws))}`;
    // displayTotalPlays.textContent = `Total Plays: ${totalPlays}, W/L: ${ratio}%`;
        displayFeedback.textContent = `You Lost!`;
    } else if (compareThrow(userThrow, getThrow(oppThrow)) === 'draw') {
        totalPlays++;
        totalDraws++;
        printSpaget(totalPlays, totalWins, totalDraws);       
    //    totalPlays++;
    // ratio = Math.ceil((totalWins / totalPlays) * 100);
    // displayTotalWins.textContent = `Total Wins: ${totalWins} Total Draws: ${totalDraws} Total Losses: ${Math.ceil(totalPlays - (totalWins + totalDraws))}`;
    // displayTotalPlays.textContent = `Total Plays: ${totalPlays}, W/L: ${ratio}%`;
        displayFeedback.textContent = `Draw!`;
    }
        
});

buttonReset.addEventListener('click', () => {
    totalPlays = 0;
    totalWins = 0;
    totalDraws = 0;
    displayTotalWins.textContent = `Total Wins: ${totalWins} Total Draws: ${totalDraws} Total Losses:  0`;
    displayTotalPlays.textContent = `Total Plays: ${totalPlays}, W/L: 0%`;
    displayFeedback.textContent = `I will pretend I didn't see that.`;
});