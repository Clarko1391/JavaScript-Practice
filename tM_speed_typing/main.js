window.addEventListener('load', init);

//Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

// to change level
let currentLevel = levels.easy;

// Global Variables
let time = currentLevel;
let score = 0;
let isPlaying = 0;

//Dom Elements
const wordInput = document.getElementById('wordInput');
const currentWord = document.getElementById('gameWord');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const message = document.getElementById('message');
const seconds = document.getElementById('seconds');
const difficulty = document.getElementById('difficulty');
const difficultyDisplay = document.getElementById('difficultyDisplay');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'sibling',
    'investigate',
    'horrendous',
    'symptom',
    'syndrome',
    'laughter',
    'prince',
    'island',
    'bicycle',
    'apple',
    'magic',
    'master',
    'space',
    'definition'
];

//Difficulty Selector
difficulty.addEventListener('click', function(){difficultySelector()});

//Initilaize game

function init() {
    // Load a random word from the array
    showWord(words);
    //Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countDown, 1000);
    //Check game status
    setInterval(checkStatus, 50);
    seconds.innerHTML = currentLevel;
}

// pick and show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output a random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countDown () {
    //make sure time isn't run out
    if (time > 0) {
        time--;
    } else if (time === 0) {
    // Game over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        //score set to -1 so user doesn't get a point for entering word to staret game
        score = -1;
    }
}

function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        //time set to n + 1 to allow 1s for page load
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    //if score = -1 , display 0
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
    
}

//match current word to word input
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "correct!!!";
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

function difficultySelector() {
    
    let x = difficultyDisplay.innerHTML;
    switch (x) {
        case 'easy':
            difficultyDisplay.innerHTML = 'medium';
            currentLevel = levels.medium;
            break;
        case 'medium':
            difficultyDisplay.innerHTML = 'hard';
            currentLevel = levels.hard;
            break;
        case 'hard':
            difficultyDisplay.innerHTML = 'easy';
            currentLevel = levels.easy;
            break;
    }

    init();

}