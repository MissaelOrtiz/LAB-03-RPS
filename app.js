// import functions and grab DOM elements
import { compareThrow, getRandomThrow} from './utils.js';
// initialize state
let totalPlays = 0;
let totalWins = 0;
let oppThrow = Math.ceil(Math.random() * 3);

// set event listeners to update state and DOM