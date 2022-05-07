/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function() {

eval("//values and timings\nconst minTime = 300;\nconst maxTime = 600;\nconst gameTime = 15;\n\n//selectors\nconst startBtn = document.querySelector(\".game_start\");\nconst restartBtn = document.querySelector(\".game_restart\");\nconst timeInfo = document.querySelector(\".time\");\nconst scoreInfo = document.querySelector(\".score\");\nconst highscore = document.querySelector(\".highscore\");\nconst gameBoard = document.querySelector('.game');\n\n//global variables\nlet lastHole;\nlet timeLeft = gameTime;\nlet score = 0;\n\n//intervals\nlet timeLeftInterval;\nlet nextAppearTimeout;\nlet visible;\n\n//functions\nconst randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;\nconst randomTime = () => randomRange(minTime, maxTime);\n\n//show and hide beaver\n\nconst hideBeaver = (hole) => hole.children[0].classList.remove('active');\nconst showBeaver = (hole) => {\n    hole.children[0].classList.add('active');\n}\n\n//highscore\nconst savePB = () =>{\n    const PB = localStorage.getItem('hsc');\n    if (score> PB){\n        localStorage.setItem('hsc', score);\n    }\n}\nconst getPB = () =>{\n    const highscoreDB = localStorage.getItem('hsc');\n    highscore.innerHTML = `Highscore: ${highscoreDB}` || `Highscore: 0`;\n}\ngetPB();\n\n//hole onclick hit_detection\nthis.clickDetection = (hole) =>{\n\n//display hit and add score\n    if (hole.classList.contains('active')) {\n        clearTimeout(visible);\n        hideBeaver(hole.parentNode);\n        score++;\n        updateScore();\n    \n    }\n}\nconst updateScore = () =>{\n    scoreInfo.innerHTML = `Score: ${score} `\n}\n\n//board size and display hole\nconst displayBoard = () =>{\n\n    //Time Left\n    timeLeftInterval = setInterval(() => {\n        timeLeft--;\n        if (timeLeft == 0) {\n            clearInterval(timeLeftInterval);\n            clearTimeout(visible);\n            clearTimeout(nextAppearTimeout);\n            savePB();\n            getPB();\n            timeLeft = gameTime;\n        }\n        timeInfo.innerHTML = `Time: ${timeLeft}`\n    }, 1000);\n\n    \n\n    const boardSize = document.querySelector('select').value;\n\n    //reset the board before creating new one\n    gameBoard.innerHTML = null;\n    gameBoard.style.cssText = `grid-template-columns: repeat(${boardSize}, ${100/boardSize}%)`\n\n    //creating the board from selected size\n    let i = 0;\n    while (i < (boardSize*boardSize)) {\n        gameBoard.innerHTML += `<div class=\"hole_wrapper\">\n        <img src=\"../src/beaver.png\" alt=\"Beaver\" class=\"beaver\" onclick=clickDetection(this) draggable=\"false\">\n        <img src=\"../src/hole.png\" alt=\"Hole\" class=\"hole\" draggable=\"false\">\n    </div>`\n        i++\n    }\n    const [...holes] = document.querySelectorAll(\".hole_wrapper\");\n    //holes.forEach((hole) => hole.addEventListener('click', (clickDetection())));\n    const randomHole = () => holes[randomRange(0, holes.length -1)];\n\n    \n\n    const showRandomBeaver = () => {\n        const hole = randomHole();\n        if (lastHole === hole) {\n         showRandomBeaver();\n         return\n        }\n        lastHole = hole\n        showBeaver(hole);\n        let visible = setTimeout(() => hideBeaver(hole), 1000);\n    }\n\n    let nextAppearTimeout = setInterval(() => {\n        showRandomBeaver();\n    }, randomTime());\n    \n    \n}\n\n\n//restart game\nthis.resetGame = () => {\n    window.location.reload();\n}\n\nthis.test = () => {\n    displayBoard();\n}\n\n//# sourceURL=webpack://hit_the_beaver/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;