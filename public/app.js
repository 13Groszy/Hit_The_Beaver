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

eval("//values and timings\nconst minTime = 300;\nconst maxTime = 1000;\nconst minDelay = 100;\nconst maxDelay = 500;\nconst gameTime = 30;\n\n//selectors\nconst startBtn = document.querySelector(\".game_start\");\nconst restartBtn = document.querySelector(\".game_restart\");\nconst timeInfo = document.querySelector(\".time\");\nconst scoreInfo = document.querySelector(\".score\");\nconst highscore = document.querySelector(\".highscore\");\nconst [...holes] = document.querySelectorAll(\".hole_wrapper\");\nconst gameBoard = document.querySelector('.game');\n\n//global variables\nlet isRunning = false;\nlet lastHole;\nlet timeLeft = gameTime;\nlet score = 0;\n\n//intervals\nlet timeLeftInterval;\nlet visible;\nlet nextAppearTimeout;\n\n//functions\nconst randomRange = (min,max) =>{\n    Math.floor(Math.random() * (max - min +1)) + min;\n}\nconst randomHole = () => holes[randomRange(0, holes.length -1)];\nconst randomTime = () => randomRange(minTime, maxTime);\nconst randomDelay = () => randomRange(minDelay, maxDelay);\n\n//show and hide beaver\nconst showBeaver = (hole) => hole.classList.add('active');\nconst hideBeaver = (hole) => hole.classList.remove('active');\n\nconst showRandom = () => {\n    const hole = randomHole();\n\n    showBeaver(hole);\n}\n\n//board size and display hole\nconst displayBoard = () =>{\n    \n    const boardSize = document.querySelector('select').value;\n\n    //reset the board before creating new one\n    gameBoard.innerHTML = null;\n    gameBoard.style.cssText = `grid-template-columns: repeat(${boardSize}, ${100/boardSize}%)`\n\n    //creating the board from selected size\n    let i = 0;\n    while (i < (boardSize*boardSize)) {\n        gameBoard.innerHTML += `<div class=\"hole_wrapper\">\n        <img src=\"../src/beaver.png\" alt=\"Beaver\" class=\"beaver\" draggable=\"false\">\n        <img src=\"../src/hole.png\" alt=\"Hole\" class=\"hole\" draggable=\"false\">\n    </div>`\n        i++\n    }\n}\n\n//hit detection\n//hole onclick hit_detection\n//display hit and add score\n//highscore\n\nthis.test = () =>{\n    displayBoard()\n}\n\n//# sourceURL=webpack://hit_the_beaver/./src/app.js?");

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