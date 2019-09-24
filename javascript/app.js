
$(document).ready(function () {
    
	var triviaObjects = [{
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
	var correctCount = 0;
	var wrongCount = 0;
	var unanswerCount = 0;
	var clock = 30;
	var intervalId;
	var userGuess ="";
	var time = false;
	var numberOfQuestions = triviaObjects.length;
	var select;
	var fullIndex;
	var newArray = [];
	var holder = [];
	
	
	$("#reset").hide();

	$("#start").on("click", function () {
			$("#start").remove();
			$("#workaholics").remove();
			$("h1").empty();
			$("h2").empty();
			$("p").empty();
			displayQuestion();
			runclock();
			for(var i = 0; i < triviaObjects.length; i++) {
		holder.push(triviaObjects[i]);
	}
		})

	function runclock(){
		if (!time) {
		intervalId = setInterval(decrement, 1000); 
		time = true;
		}
	}
	function decrement() {
		$("#clock").html("<h3>Time remaining: " + clock + "</h3>");
	clock --;
	
	if (clock === 0) {
	unanswerCount++;
    stop();
	$("#answerblock").html("<p>Time is up! The correct answer is: " + select.choice[select.answer] + "</p>");
    removeImage();
		}   
	 }
	
	function stop() {
		time = false;
		clearInterval(intervalId);
	}

	function displayQuestion() {
		fullIndex = Math.floor(Math.random()*triviaObjects.length);
		select = triviaObjects[fullIndex];
			$("#questionblock").html("<h2>" + select.question + "</h2>");
			for(var i = 0; i < select.choice.length; i++) {
				var userChoice = $("<button>");
				userChoice.addClass("answerchoice");
				userChoice.html(select.choice[i]);
				userChoice.attr("data", i);
				$("#answerblock").append(userChoice);
			}
	}
	//$(".answerchoice").on("click", function() 
	//$(`BUTTON `).attr("data-data") === questions[this.currentQuestion].correctAnswer
	
	$(document).on("click", ".answerchoice", function () {
		console.log("testing")
		userGuess = parseInt($(this).attr("data"));

		if (userGuess === select.answer) {
			stop();
			correctCount++;
			userGuess="";
			$("#answerblock").html("<p>Correct!</p>");
			removeImage();
		} else {
			stop();
			wrongCount++;
			userGuess="";
			$("#answerblock").html("<p>Wrong! The correct answer is: " + select.choice[select.answer] + "</p>");
			removeImage();
		}
	})
	
	function removeImage () {
		$("#answerblock").append("<img src=" + select.photo + ">");
		newArray.push(select);
		triviaObjects.splice(fullIndex,1);
		var over = setTimeout(function() {
			$("#answerblock").empty();
			clock= 30;

		if ((wrongCount + correctCount + unanswerCount) === numberOfQuestions) {
			$("#questionblock").empty();
			$("#questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
			$("#answerblock").append("<h4> Correct: " + correctCount + "</h4>" );
			$("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>" );
			$("#answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>" );
			$("#reset").show();
			correctCount = 0;
			wrongCount = 0;
			unanswerCount = 0;
		} else {
			runclock();
			displayQuestion();
		}
		}, 5000);
	
	
	}
	
	$("#reset").on("click", function() {
		$("#reset").hide();
		$("#answerblock").empty();
		$("#questionblock").empty();
		for(var i = 0; i < holder.length; i++) {
			triviaObjects.push(holder[i]);
		}
		runclock();
		displayQuestion();
	
	})
	
	})

