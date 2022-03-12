//declaration of variables

var buttonEl = document.querySelector("#start");
var sectionEl = document.querySelector ("#questions-container");
var headerEl = document.querySelector(".welcome-box");
var timerEl = document.querySelector("#init");
var opt1El = document.querySelector("#btn1");
var opt2El = document.querySelector("#btn2");
var opt3El = document.querySelector("#btn3");
var opt4El = document.querySelector("#btn4");
var optionsEl = document.querySelector("#answer-buttons");
var alertsEl = document.querySelector("#alerts");
var inputEl = document.querySelector(".buttons");
var i = 0;
var corrects = 0;
var timeLeft = 50;

buttonEl.addEventListener("click", function() {
    buttonEl.classList.add("hide")
         sectionEl.classList.remove("hide")
              headerEl.classList.add("hide")
                 
                      timerEl.classList.remove("hide")
                         timer();

                      document.getElementById("question").innerHTML = questions[0].question;
                      document.getElementById("btn1").innerHTML = questions[0].options[0];
                      document.getElementById("btn2").innerHTML = questions[0].options[1];
                      document.getElementById("btn3").innerHTML = questions[0].options[2];
                      document.getElementById("btn4").innerHTML = questions[0].options[3];
                      
                        
});

optionsEl.addEventListener("click", function(event) {
  var correctans = event.target;
alertsEl.innerHTML="";
     if (correctans.textContent == questions[i].answers) {
        corrects = corrects +1 
        document.getElementById("alerts").innerHTML = "Your answer is correct";
      }

      if (correctans.textContent !== questions[i].answers) {
        document.getElementById("alerts").innerHTML = "Your answer is incorrect";
        timeLeft=timeLeft-10;
      }


if (i < (questions.length-1) ) {
               i = i+1;
                    document.getElementById("question").innerHTML = questions[i].question;
                    document.getElementById("btn1").innerHTML = questions[i].options[0];
                    document.getElementById("btn2").innerHTML = questions[i].options[1];
                    document.getElementById("btn3").innerHTML = questions[i].options[2];
                    document.getElementById("btn4").innerHTML = questions[i].options[3];
}


else {
  finish();
}
});
 var finish = function() {
   window.alert("you got  "+corrects +"correct answers");
   sectionEl.classList.add("hide")
   timerEl.classList.add("hide")
   document.getElementById("alerts").innerHTML = "Your final score is " + (corrects *25)+" Add your name below for the database";
   inputEl.classList.remove("hide")

 }

// Timer that counts down from 5
function timer() {
  

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


  var questions= [
{

question: "1. Inside the HTML document, where do you place your JavaScript code?",
answers: "Inside the script element",
options: [
"Inside the script element",
"In the footer element",
"Inside the head element",
"Inside the link element"
]
},
{
 
question: "2. What operator is used to assign a value to a declared variable?",
answers:"Equal sign (=)",
options: [
"Question marK (?)",
"Colon (:)",
"Equal sign (=)",
"Double-equal (==)"
]
},
{

question: "3. How do we declare a conditional statement in JavaScript?",
answers: "if...else",
options: [
"while loop",
"if...else",
"for loop",
"difference...between"
]
}, 

{

question: "4. What are the two types of scope JavaScript uses?",
answers: "Global and Local",
options: [
"Global and Local",
"Surrounding and Inner",
"Outside and Inside",
"Abroad and Local false"
]
},
  ];