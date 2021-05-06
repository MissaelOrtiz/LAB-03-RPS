// import functions and grab DOM elements
import { compareThrow, getThrow } from './utils.js';
const displayTotalWins = document.querySelector('#total-wins');
const displayTotalPlays = document.querySelector('#total-plays');
const displayFeedback = document.querySelector('#feedback');
const buttonSubmit = document.querySelector('#submit-button');
// initialize state
let totalPlays = 0;
let totalWins = 0;
let totalDraws = 0;

// set event listeners to update state and DOM
buttonSubmit.addEventListener('click', () => {
    const selectedThrow = document.querySelector('input:checked');
    const userThrow = selectedThrow.value;
    let oppThrow = Math.ceil(Math.random() * 3);
    let ratio = Math.ceil((totalWins / totalPlays) * 100);
    let losses = Math.ceil(totalPlays - (totalWins + totalDraws));
    if (compareThrow(userThrow, getThrow(oppThrow)) === +1) {
        totalPlays++;
        totalWins++;
        displayTotalWins.textContent = `Total Wins: ${totalWins} Total Draws: ${totalDraws} Total Losses: ${losses}`;
        displayTotalPlays.textContent = `Total Plays: ${totalPlays}, W/L: ${ratio}%`;
        displayFeedback.textContent = `You Won!`;
    } else if (compareThrow(userThrow, getThrow(oppThrow)) === -1) {
        totalPlays++;
        displayTotalWins.textContent = `Total Wins: ${totalWins} Total Draws: ${totalDraws} Total Losses: ${losses}`;
        displayTotalPlays.textContent = `Total Plays: ${totalPlays}, W/L: ${ratio}%`;
        displayFeedback.textContent = `You Lost!`;
    } else if (compareThrow(userThrow, getThrow(oppThrow)) === 0) {
        totalPlays++;
        totalDraws++;
        displayTotalWins.textContent = `Total Wins: ${totalWins} Total Draws: ${totalDraws} Total Losses: ${losses}`;
        displayTotalPlays.textContent = `Total Plays: ${totalPlays}, W/L: ${ratio}%`;
        displayFeedback.textContent = `Draw!`;
    }
});