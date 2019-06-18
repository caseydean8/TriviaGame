// Create global variable for correct answers, incorrect answers, and unanswered.
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var countdownNumber = 16;
var intervalId

var gameQuestions = {
    page1: ["Which movie won the special achievement award at the 60th Academy Awards?", ["Lethal Weapon", false], ["Full Metal Jacket", false], ["Robocop", true], ["Predator", false]]
}



// Use onclick event to populate question field and answer buttons.
function startGame() {
    document.getElementById("question").innerHTML = gameQuestions.page1[0];
    // Loop through buttons to print movies frome page1.
    var btn = document.getElementsByClassName("btn");
    console.log(btn);
    for(var i = 0; i < btn.length; i++) {
      // document.createElement("button");
      btn[i].innerHTML = gameQuestions.page1[i + 1][0];
      btn[i].value = gameQuestions.page1[i + 1][1];
      console.log(btn[i].value);
      // console.log(btn.length);
    }
    // document.getElementById("button1").innerHTML = gameQuestions.page1[1][0];
    // document.getElementById("button2").innerHTML = gameQuestions.page1[2][0];
    // document.getElementById("button3").innerHTML = gameQuestions.page1[3][0];
    // document.getElementById("button4").innerHTML = gameQuestions.page1[4][0];
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
      // Create a listener for button click
      // document.getElementById()

}




// If player guesses before timer expires.


// Alert player if they are correct or incorrect and show correct answer. 


// If timer expires show correct answer.


// Keep track of players correct guesses, incorrect guesses, and timer expiration.


// Load next screen with timer ~4s.


// After last question, show correct, incorrect, and unanswered(timer expiration) tallies. Also create a start over button that resets the game