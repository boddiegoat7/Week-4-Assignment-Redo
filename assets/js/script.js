var questionIndex = 0;
var userCorrectAnswer = 0;
var timeLeft = 75;
var question;
var answer1, answer2, answer3, answer4;
var previousScores;
var questionAnswerCorrect;
var selectionArray = [];
var buttonArray = [];

var userQuestions = [
  {
    question: "Commonly used data types Do not include:",
    answers: {
      0: "strings",
      1: "booleans",
      2: "alerts",
      3: "numbers",
    },

    correctAnswer: "alerts",
  },

  {
    question:
      "The condition in an if / else statement enclosed with __________.",
    answers: {
      0: "quotes",
      1: "curly brackets",
      2: "parenthesis",
      3: "square brackets",
    },

    correctAnswer: "parenthesis",
  },

  {
    question: "Arrays in JavaScript can be be used to store ________.",
    answers: {
      0: "numbers and strings",
      1: "other arrays",
      2: "booleans",
      3: "all the above",
    },

    correctAnswer: "all the above",
  },

  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.",
    answers: {
      0: "commas",
      1: "curly brackets",
      2: "quotes",
      3: "paranthesis",
    },

    correctAnswer: "quotes",
  },

  {
    question:
      "A very useful tool used during developement and debugging for printing content to the debugger is:",
    answers: {
      0: "JavaScript",
      1: "terminal/bash",
      2: "for loops",
      3: "console.log",
    },

    correctAnswer: "console.log",
  },
];

totalQuestions = userQuestions.length;
var timer = document.querySelector("#timer");
var scoreLink = document.querySelector("scorelink");
var principalContent = document.querySelector("#principal-content");
var questionSwitch = document.getElementById("question-change");
var quizQuestion = document.querySelector("#quizquestion");
var userSelection = document.querySelector("#userselection");
var userScore = document.querySelector("#userscore");
var userHighScore = document.querySelector("#userhighscores");
var score = document.getElementById("scorelink");
var startButton = document.getElementById("startquiz");

// starts test

function start() {
  timer();
  question();
}

function timer() {
  var interval = setInterval(function () {
    timeLeft--;

    timer.textContent = "Time : " + timeLeft;

    if (timeLeft <= 0 || questionIndex > totalQuestions - 1) {
      userSelection.style.display = "none";
      quizQuestion.style.display = "none";
      result();
      clearInterval(interval);
      timer.textContent = "";
    }
  }, 1000);
}

for (var i = 0; i < 4; i++) {
  var buttonDiv = document.createElement("div");
  var selectionButtons = document.createElement("button");
  selectionButtons.setAttribute("data-index", i);
  selectionButtons.setAttribute("class", "btnn");
  selectionArray.push(buttonDiv);
  buttonArray.push(selectionButtons);
}

// display of correct or incorrect answers

var correctIncorrect = document.createElement("p");
correctIncorrect.setAttribute("class", "right-wrong");
userSelection.appendChild(correctIncorrect);

//start quiz button
startButton.addEventListener("click", startChallenge);