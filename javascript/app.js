

//document.ready starts the questions are below with an answer choices the array number in the 
//answer and a corresponding photo

//each question has values
$(document).ready(function () {
		var trviaObjects = [{
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
			}
		];


		//here are all te variables
		//we are counting correct wrong(including not answered)
		var correctCount = 0;
		var wrongCount = 0;
		var noAnswer = 0;
		//time variables
		var timePerQuest = 30;
		var clockInterval;
		var userGuess = "";
		var numQuestion = trviaObjects.length;

		// make sure its not running
		var running = false;

		//question tracking 


		//counts the questions with the .length property
		var questionCount = trviaObjects.length;
		//picks for question
		var option;
		//full index
		var fullIndex;


		var newArray = [];
        var place = [];
        
        //start
        $("#reset").hide();

		$("start").on("click", function () {
			displayQuestion();
			startTimer();
			for (var i = 0; i < trviaObjects.length, i++) {
				place.push(trviaObjects.length[i])
			}
		})

		//write the functions to start the timer and display the questions

		function startTimer() {
			if (!running) {
				clockInterval = setInterval(decrement, 1000);
				running = true;
			}
		}

		//count the time

		function decrement() {
			$("#clock").html("<h3>Time remaining: " + timePerQuest + " </h3>");
			timePerQuest--;
		}
		//stop the timer after each go around or when times up
		if (timePerQuest === 0)
			noAnswer++;
		endTime()
		$("#answerblock").html("<p>Time is up! The correct answer is: " + option.choice[option.answer] + "</p>");
		removeImage();
	}
}
//complete stop function
function endTime() {
	running = false;
	clearInterval(clockInterval);
}

//pick a question randomly to display
//correct the display properties

function displayQuestion() {
	index = Math.floor(Math.random() * trviaObjects.length);
	option = trviaObjects[fullIndex];
}
}
//show visual question
//add answers seperate because answers go away before question
$("#questionblock").html("<h2>" + option.question + "</h2>");
for(var i = 0; i < option.choice.length; i++) {
    var userChoice = $("<div>");
    userChoice.addClass("answerchoice");
//all options and choices of the array
userChoice.html(option.choice[i]); 
userChoice.attr("data", i);
			$("#answerblock").append(userChoice);
}}


//create a click function so the user can select questions
$(".answerchoice")on("click" function (){
    userGuess = parseInt($(this).attr("data"));

    if (userGuess === option.answer) {
        endTime ();
        correctCount++;
        userGuess"";
        $("#answerblock").html("<p>Correct!</p>");
		removeImage();
    }
else {
    stop();
    wrongCount++;
    userGuess="";
    $("#answerblock").html("<p>Wrong! The correct answer is: " + option.choice[option.answer] + "</p>");
    removeImage();
}
})
}


function removeImage() {
	$("#answerblock").append("<img src=" + pick.photo + ">");
	newArray.push(option);
    options.splice(fullIndex,1);

    var empty = setTimeout(function() {
		$("#answerblock").empty();
		timerPerQuest= 30;
    
//here part i am working on


if ((wrongCount + correctCount + unanswerCount) === numQuestion) {
    $("#questionblock").empty();
    $("#questionblock").html("<h3>Game Over!  Your results are below: </h3>");
    $("#answerblock").append("<h4> Correct: " + correctCount + "</h4>" );
    $("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>" );
    $("#answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>" );
    $("#reset").show();
    correctCount = 0;
    wrongCount = 0;
    unanswerCount = 0;

} else {
    endTime();
    displayQuestion();

}
}, 3000);


}

$("#reset").on("click", function() {
$("#reset").hide();
$("#answerblock").empty();
$("#questionblock").empty();
for(var i = 0; i < place.length; i++) {
    trviaObjects.push(place[i]);
}
runTimer();
displayQuestion();

})

})

















//grab the array position for the user's guess

//if else statement for right or wrong answers

//change the image out with the question

//show score after all questions are answered