// Create global variable for correct answers, incorrect answers, and unanswered.
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
// var countdownNumber = 5;
// var intervalId;

var gameQuestions = {
    questions: ["Which movie won the special achievement award at the 60th Academy Awards?", "Which supernatural thrillers protagonist was named Jack Burton?",],
    answers: [["Lethal Weapon", "Full Metal Jacket", "Robocop", "Predator"], ["The Golden Child", "Big Trouble in Little China", "Howard the Duck", "Innerspace"]],
    rightAnswer: ["Robocop", "Big Trouble in Little China"]
};
var page = 0;
var rightAnswer


// Use onclick event to populate question field and answer buttons.
function startGame() {
    document.getElementById("question").innerHTML = gameQuestions.questions[page];

    for(var i = 0; i < gameQuestions.answers[page].length; i++) {
      var answerButton = document.createElement("button");
      answerButton.innerHTML=gameQuestions.answers[page][i];
      answerButton.classList.add("btn");
      $("div.button").append($(answerButton));
    // start 15s timer.
    run();
  }
}   
var intervalId;
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  var countdownNumber = 16;

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
      console.log("unanswered timeout" + unanswered);
      document.getElementById("answer-output").innerHTML = "The answer is " +rightAnswer[page];
      reset();
      }
  }
}
  

  // Create a listener for button click
    $(".btn").click(function() {
      $(".btn").remove();
      var fired_button = $(this).val();

      console.log(fired_button);
      if (fired_button == rightAnswer[page]){
          document.getElementById("answer-output").innerHTML = "Correct! the answer is " + $(this).text();
          correctAnswers++;
          // console.log("right " + correctAnswers);
          reset();
      }
      else {
        document.getElementById("answer-output").innerHTML = "Incorrect! the answer is " + rightAnswer[page];
        incorrectAnswers++;
        // console.log("wrong " + incorrectAnswers);
        reset();
      }
    });

    function reset(){
      page++;
      console.log("page number " + page);
      clearInterval(intervalId);

      setTimeout(startGame, 3000);
      clearInterval(intervalId);
      // startGame();
    }
  
  






// If player guesses before timer expires.


// Alert player if they are correct or incorrect and show correct answer. 


// If timer expires show correct answer.


// Keep track of players correct guesses, incorrect guesses, and timer expiration.


// Load next screen with timer ~4s.


// After last question, show correct, incorrect, and unanswered(timer expiration) tallies. Also create a start over button that resets the game//