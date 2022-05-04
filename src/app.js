//values and timings
const minTime = 300;
const maxTime = 1000;
const minDelay = 100;
const maxDelay = 500;
const gameTime = 30;

//selectors
const startBtn = document.querySelector(".game_start");
const restartBtn = document.querySelector(".game_restart");
const timeInfo = document.querySelector(".time");
const scoreInfo = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const [...holes] = document.querySelectorAll(".hole_wrapper");
const gameBoard = document.querySelector('.game');

//global variables
let isRunning = false;
let lastHole;
let timeLeft = gameTime;
let score = 0;

//intervals
let timeLeftInterval;
let visible;
let nextAppearTimeout;

//functions
const randomRange = (min,max) =>{
    Math.floor(Math.random() * (max - min +1)) + min;
}
const randomHole = () => holes[randomRange(0, holes.length -1)];
const randomTime = () => randomRange(minTime, maxTime);
const randomDelay = () => randomRange(minDelay, maxDelay);

//show and hide beaver
const showBeaver = (hole) => hole.classList.add('active');
const hideBeaver = (hole) => hole.classList.remove('active');

const showRandom = () => {
    const hole = randomHole();

    showBeaver(hole);
}

//board size and display hole
const displayBoard = () =>{
    
    const boardSize = document.querySelector('select').value;

    //reset the board before creating new one
    gameBoard.innerHTML = null;
    gameBoard.style.cssText = `grid-template-columns: repeat(${boardSize}, ${100/boardSize}%)`

    //creating the board from selected size
    let i = 0;
    while (i < (boardSize*boardSize)) {
        gameBoard.innerHTML += `<div class="hole_wrapper">
        <img src="../src/beaver.png" alt="Beaver" class="beaver" draggable="false">
        <img src="../src/hole.png" alt="Hole" class="hole" draggable="false">
    </div>`
        i++
    }
}

//hit detection
//hole onclick hit_detection
//display hit and add score
//highscore

this.test = () =>{
    displayBoard()
}