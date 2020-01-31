// Create global variable for correct answers, incorrect answers, and unanswered.
let correctAnswers = 0;
let incorrectAnswers = 0;
let unanswered = 0;
let page = 0;
let rightAnswer;
const game = {
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
  rightAnswer: ["Robocop", "Big Trouble in Little China", "Bryan Bozworth"],
  gif: [
    "https://media.giphy.com/media/4EFuzRi9HpbW/giphy.gif",
    "https://media.giphy.com/media/69lXr3CqBmNaTypTjC/giphy.gif",
    "https://66.media.tumblr.com/c7eb4eb6b04d68b1c5c534c41ff3f41c/tumblr_pfxpvvEBW81snghrzo1_400.gif"
  ]
};

// Use onclick event to populate question field and answer buttons.
const startGame = () => {
  $(".gif-hold").remove();
  document.getElementById("start-button").style.display = "none";
  document.getElementById("timer").style.display = "flex";
  document.getElementById("timer").innerHTML = "15";
  document.getElementById("answer-output").innerHTML = "";
  document.getElementById("question").innerHTML = game.questions[page];

  for (let i = 0; i < game.answers[page].length; i++) {
    const answerButton = document.createElement("button");
    answerButton.classList.add("btn");
    answerButton.innerHTML = game.answers[page][i];
    $("div.button").append($(answerButton));
  }
  // start 15s timer.
  run();
};

let intervalId;
const run = () => {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  let countdownNumber = 15;

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

      document.getElementById("question").innerHTML =
        "The answer is " + game.rightAnswer[page];

      reset();
    }
  }
};

// Create a listener for question button click
$("div.button").on("click", "button.btn", function() {
  var fired_button = this.innerHTML;
  document.getElementById("question").textContent = "";

  if (fired_button === game.rightAnswer[page]) {
    document.getElementById("question").textContent =
      "Correct! The answer is " + $(this).text();
    correctAnswers++;
  } else {
    document.getElementById("question").innerHTML =
      "Incorrect! The answer is " + game.rightAnswer[page];
    incorrectAnswers++;
  }
  reset();
});

const reset = () => {
  $(".btn").remove();
  const gifHold = $("<img>");
  gifHold.addClass("gif-hold");
  $(gifHold).attr("src", game.gif[page]);
  $(".button").append(gifHold);
  page++;
  clearInterval(intervalId);
  // Set delay for next question.
  page === game.questions.length
    ? setTimeout(gameReset, 3000)
    : setTimeout(startGame, 3000);
};

const gameReset = () => {
  page = 0;
  document.getElementById("timer").innerHTML = "";
  document.getElementById("question").innerHTML = "";
  document.getElementById("answer-output").innerHTML = "";
  const summary = "<p>";
  const good = correctAnswers;
  const bad = incorrectAnswers + unanswered;

  $("#question").append(
    (summary.innerHTML = `You got ${good} correct, and you got ${bad} wrong.`)
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
  startGame();
};
