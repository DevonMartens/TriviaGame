
//document.ready starts the questions are below with an answer choices the array number in the 
//answer and a corresponding photo

//each question has values
$(document).ready(function () {
    var trviaObjects = [
        {
            question: "What is the blob of tooth paste that sits on your brush called?", 
            choice: ["A nurdle", "Tooth Paste", "Grimp", "Flob"],
            answer: 0,
            photo: "images/toothDance.jpg"
         },
         {
            question: "In China, animals are forbidden to use human language. This belief led to the ban of a book of which famous writer, in the country?", 
            choice: ["The Jungle Book", "Winne the Poo", "Harry Potter", "Alice's Adventures in Wonderland"],
            answer: 3,
            photo: "images/Free-Cat-Jokes.jpg"
         }, 
         {
            question: "Which animal is known to kill more people than plane crashes?", 
            choice: ["Shark", "Black Bear", "Donkey", "Hippo"],
            answer: 2,
            photo: "images/Dangerous_animal.jpg"
        }, 
        {
            question: "60% of your brain is made up of which of the following?", 
            choice: ["Muscle", "Water", "Fat", "English Tea"],
            answer: 2,
            photo: "images/waves.jpg"
        }, 
        {
            question: "Who were the first people to wear high heels?", 
            choice: ["Men in the tenth century to aid in riding horses", "Drag Queens in the 20's", "Men in the middle ages to look taller", "Women in the 1900's"],
            answer: 0,
            photo: "images/heel.jpg"
        }, 
        {
            question: "According to engineering students at Perdue University-How many licks does it take to get to the center of a tootsie pop?", 
            choice: ["535", "298", "335", "364"],
            answer: 3,
            photo: "images/a694eaK.gif"
        }, 
        {
            question: "Where were the first oranges planted?", 
            choice: ["Florida", "Brazil", "Alabama", "Guatamala"],
            answer: 0,
            photo: "images/The-orange-man--131236.jpg"
        }, 
        {
            question: "Which animal has the problem solving abilities of a 3 year old?", 
            choice: ["Maccaw", "Chimp", "Baboon", "Africian Grey"],
            answer: 3,
            photo: "images/problem.jpg"
        }];



    //here are all te variables
    //we are counting correct wrong(including not answered)
    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timePerQuest = 20;
    var clockInterval;
    var userGuess ="";
    var numQuestion = trviaObjects.length;

    // make sure its not running
    var running = false;
    //counts the questions with the .length property
    var questionCount = trviaObjects.length;
    //picks for question
   var pickForQuestion;
   //full index
    var fullIndex;


    //var newArray = [];
  var holder = [];

  $(start).on("click", function() {
      displayQuestion ();
      startTimer ();
      for (var i=0; i < trviaObjects.length, i++) {
          holder.push (trviaObjects.length[i])
      }
  })

//write the functions to start the timer and display the questions


function startTimer() {
    if (!running) {
clockInterval = setInterval(decrement, 100);
running = true;
    }
}

//count the time

function decrement()


//stop the timer after each go around or when times up

//complete stop function

//pick a question randomly to display
//correct the display properties


//create a click function so the user can select questions

//grab the array position for the user's guess

//if else statement for right or wrong answers

//change the image out with the question

//show score after all questions are answered


