// Create global variable for correct answers, incorrect answers, and unanswered.
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var countdownNumber = 16;
var intervalId;

var gameQuestions = {
    questions: ["Which movie won the special achievement award at the 60th Academy Awards?", "Which supernatural thrillers protagonist was named Jack Burton?",],
    answers: [[["Lethal Weapon", 0], ["Full Metal Jacket", 0], ["Robocop", 1], ["Predator", 0]], [["The Golden Child", 0], ["Big Trouble in Little China", 1], ["Howard the Duck", 0], ["Innerspace", 0]]]
};
var page = 0;
var rightAnswer

// var btn = document.getElementsByClassName("btn");

// Use onclick event to populate question field and answer buttons.
function startGame() {
    document.getElementById("question").innerHTML = gameQuestions.questions[page];
    // Loop through buttons to print movies frome page1.
    var btn = document.getElementsByClassName("btn");
    // console.log(btn);
    for(var i = 0; i < btn.length; i++) {
      // document.createElement("button");
      btn[i].innerHTML = gameQuestions.answers[page][i][0];
      btn[i].value = gameQuestions.answers[page][i][1];
      if (btn[i].value == 1){
        rightAnswer = gameQuestions.answers[page][i][0];
        console.log(rightAnswer);
      }
    }
    
    // start 15s timer.
    run();

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }
    function decrement() {
        //  Decrease number by one.
        countdownNumber--;
        //  Show the number in the #show-number tag.
        document.getElementById("timer").innerHTML = countdownNumber;
        //  Once number hits zero...
        if (countdownNumber === 0) {
        //  ...run the stop function.
        clearInterval(intervalId);
        }
      }
  }

  // Create a listener for button click
      
  // function correct() {
    // var singleton = false
    $(".btn").click(function() {
      
      var fired_button = $(this).val();
      // alert(fired_button);
      console.log(fired_button);
      if (fired_button == 1){
        // singleton = true;
        // if (singleton){
          document.getElementById("answer-output").innerHTML = "Correct! the answer is " + $(this).text();
        // }
      }
      else {
      document.getElementById("answer-output").innerHTML = "Incorrect! the answer is " + $("value").text("1");
    }
  });
  
  






// If player guesses before timer expires.


// Alert player if they are correct or incorrect and show correct answer. 


// If timer expires show correct answer.


// Keep track of players correct guesses, incorrect guesses, and timer expiration.


// Load next screen with timer ~4s.


// After last question, show correct, incorrect, and unanswered(timer expiration) tallies. Also create a start over button that resets the game//