//declaration of variables

var buttonEl = document.querySelector("#start");
var sectionEl = document.querySelector ("#questions-container");
var headerEl = document.querySelector(".welcome-box");
var completetextEl=document.querySelector(".complete-text");
var timerEl = document.querySelector("#init");

buttonEl.addEventListener("click", function() {
    buttonEl.classList.add("hide")
         sectionEl.classList.remove("hide")
              headerEl.classList.add("hide")
                  completetextEl.classList.add("hide")
                      timerEl.classList.remove("hide")
                        timer();
});


var timerEl = document.getElementById('timer');

// Timer that counts down from 5
function timer() {
  var timeLeft = 50;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}



// section questions
document.getElementById("question").innerHTML = questions[0].question;
document.getElementById("ansBtn1").innerHTML = questions[0].answers[0].answer1;
document.getElementById("ansBtn2").innerHTML = questions[0].answers[1].answer2;
document.getElementById("ansBtn3").innerHTML = questions[0].answers[2].answer3;
document.getElementById("ansBtn4").innerHTML = questions[0].answers[3].answer4;

  var questions= [
{

number: 1, 
question: "Inside the HTML document, where do you place your JavaScript code?",
answer: "In the <footer> element",
options: [
"Inside the <script> element",
"In the <footer> element",
"Inside the <head> element",
"Inside the <link> element",
]
},
{
number: 2, 
question: "What operator is used to assign a value to a declared variable?",
answer:"Equal sign (=)",
options: [
"Question marK (?) false",
"Colon (:) false",
"Equal sign (=) rigth",
"Double-equal (==) false",
]
},
{
number:3, 
question: "How do we declare a conditional statement in JavaScript?",
answer: "if...else",
options: [
"while loop",
"if...else",
"for loop",
"difference...between",
]
}, 

{
number:4,
question: "What are the two types of scope JavaScript uses?",
answer: "Global and Local",
options: [
"Global and Local",
"Surrounding and Inner",
"Outside and Inside",
"Abroad and Local false",
]
},
  ];