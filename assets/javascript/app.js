// Create global variable for correct answers, incorrect answers, and unanswered.
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var page = 0;
var rightAnswer;
var gameQuestions = {
  questions: [
    "Which movie won the special achievement award at the 60th Academy Awards?",
    "Which supernatural thrillers protagonist was named Jack Burton?",
    "What actor played a cop who infiltrates a psychotic motorcycle gang in Stone Cold?"
  ],
  answers: [
    ["Lethal Weapon", "Full Metal Jacket", "Robocop", "Predator"],
    [
      "The Golden Child",
      "Big Trouble in Little China",
      "Howard the Duck",
      "Innerspace"
    ],
    ["Sylvester Stallone", "Dolph Lundgren", "Kurt Russel", "Bryan Bozworth"]
  ],
  rightAnswer: ["Robocop", "Big Trouble in Little China", "Bryan Bozworth"]
};

// Use onclick event to populate question field and answer buttons.
const startGame = () => {
  // $("#start-button").remove();
  document.getElementById("start-button").style.display = "none";
  document.getElementById("timer").style.display = "flex";
  document.getElementById("timer").innerHTML = "15";
  document.getElementById("answer-output").innerHTML = "";
  document.getElementById("question").innerHTML = gameQuestions.questions[page];

  for (var i = 0; i < gameQuestions.answers[page].length; i++) {
    var answerButton = document.createElement("button");
    answerButton.classList.add("btn");
    answerButton.innerHTML = gameQuestions.answers[page][i];
    $("div.button").append($(answerButton));
  }
  // start 15s timer.
  run();
};

var intervalId;
const run = () => {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  var countdownNumber = 15;

  function decrement() {
    //  Decrease number by one.
    countdownNumber--;
    //  Show the number in the #show-number tag.
    document.getElementById("timer").innerHTML = countdownNumber;
    //  Once number hits zero...
    if (countdownNumber === 0) {
      //  ...run the stop function.
      clearInterval(intervalId);
      unanswered++;

      document.getElementById("question").innerHTML = "";

      document.getElementById("answer-output").innerHTML =
        "The answer is " + gameQuestions.rightAnswer[page];

      reset();
    }
  }
};

// Create a listener for question button click
$("div.button").on("click", "button.btn", function() {
  var fired_button = this.innerHTML;

  document.getElementById("question").innerHTML = "";

  if (fired_button === gameQuestions.rightAnswer[page]) {
    document.getElementById("question").innerHTML =
      "Correct! The answer is " + $(this).text();
    correctAnswers++;

    reset();
  } else {
    document.getElementById("question").innerHTML =
      "Incorrect! The answer is " + gameQuestions.rightAnswer[page];
    incorrectAnswers++;

    reset();
  }
});

const reset = () => {
  $(".btn").remove();
  page++;

  clearInterval(intervalId);
  // Set delay for next question.
  if (page === gameQuestions.questions.length) {
    setTimeout(gameReset, 3000);
  } else {
    setTimeout(startGame, 3000);
  }
};

const gameReset = () => {
  page = 0;
  document.getElementById("timer").innerHTML = "";
  document.getElementById("question").innerHTML = "";
  document.getElementById("answer-output").innerHTML = "";

  var $correctDisplay = ("<div>", { id: "correct-answers" });
  var $incorrectDisplay = ("<div>", { id: "incorrect-answers" });
  var good = correctAnswers;
  var bad = incorrectAnswers + unanswered;

  $("#right").append(
    ($correctDisplay.innerHTML = "You got " + good + " correct.")
  );

  $("#right").append(
    ($incorrectDisplay.innerHTML = "You got " + bad + " wrong.")
  );
  // ------- RESET BUTTON -------
  document.getElementById("timer").style.display = "none";
  const resetButton = document.createElement("button");
  resetButton.classList.add("reset-button");
  resetButton.innerHTML = "Play Again!";
  $(".start").append($(resetButton));

  $(document)
    .off()
    .on("click", ".reset-button", function() {
      $(".reset-button").remove();
      clearAnswerTally();
    });
};

const clearAnswerTally = () => {
  correctAnswers = 0;
  incorrectAnswers = 0;
  unanswered = 0;

  document.getElementById("right").innerHTML = "";
  document.getElementById("wrong").innerHTML = "";

  startGame();
};
