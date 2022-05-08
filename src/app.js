//values and timings
const minTime = 300;
const maxTime = 600;
const gameTime = 15;

//selectors
const startBtn = document.querySelector(".game_start");
const restartBtn = document.querySelector(".game_restart");
const timeInfo = document.querySelector(".time");
const scoreInfo = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const gameBoard = document.querySelector('.game');

//global variables
let lastHole;
let timeLeft = gameTime;
let score = 0;

//intervals
let timeLeftInterval;
let nextAppearTimeout;
let visible;

//functions
const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomTime = () => randomRange(minTime, maxTime);

//show and hide beaver

const hideBeaver = (hole) => hole.children[0].classList.remove('active');
const showBeaver = (hole) => {
    hole.children[0].classList.add('active');
}

//highscore
const savePB = () =>{
    const PB = localStorage.getItem('hsc');
    if (score> PB){
        localStorage.setItem('hsc', score);
    }
}
const getPB = () =>{
    const highscoreDB = localStorage.getItem('hsc');
    highscore.innerHTML = `Highscore: ${highscoreDB}` || `Highscore: 0`;
}
getPB();

//hole onclick hit_detection
this.clickDetection = (hole) =>{

//display hit and add score
    if (hole.classList.contains('active')) {
        clearTimeout(visible);
        hideBeaver(hole.parentNode);
        score++;
        updateScore();
    
    }
}
const updateScore = () =>{
    scoreInfo.innerHTML = `Score: ${score} `
}

//board size and display hole
const displayBoard = () =>{

    //Time Left
    timeLeftInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft == 0) {
            clearInterval(timeLeftInterval);
            clearTimeout(visible);
            clearTimeout(nextAppearTimeout);
            savePB();
            getPB();
            timeLeft = gameTime;
        }
        timeInfo.innerHTML = `Time: ${timeLeft}`
    }, 1000);

    

    const boardSize = document.querySelector('select').value;

    //reset the board before creating new one
    gameBoard.innerHTML = null;
    gameBoard.style.cssText = `grid-template-columns: repeat(${boardSize}, ${100/boardSize}%)`

    //creating the board from selected size
    let i = 0;
    while (i < (boardSize*boardSize)) {
        gameBoard.innerHTML += `<div class="hole_wrapper">
        <img src="../src/beaver.png" alt="Beaver" class="beaver" onclick=clickDetection(this) draggable="false">
        <img src="../src/hole.png" alt="Hole" class="hole" draggable="false">
    </div>`
        i++
    }
    const [...holes] = document.querySelectorAll(".hole_wrapper");
    //holes.forEach((hole) => hole.addEventListener('click', (clickDetection())));
    const randomHole = () => holes[randomRange(0, holes.length -1)];

    

    const showRandomBeaver = () => {
        const hole = randomHole();
        if (lastHole === hole) {
         showRandomBeaver();
         return
        }
        lastHole = hole
        showBeaver(hole);
        let visible = setTimeout(() => hideBeaver(hole), 1000);
    }

    let nextAppearTimeout = setInterval(() => {
        showRandomBeaver();
    }, randomTime());
    
    
}


//restart game
this.resetGame = () => {
    window.location.reload();
}

this.test = () => {
    displayBoard();
}