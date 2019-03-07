$(document).ready(function(){

	var humanScores = new Array;
	var botScores = new Array;
	var humanScore = 0;
	var botScore = 0;
	
	$("button").click(function(){
		
		var userChoice = $(this).attr("id");
		var botChoice = "rock";
		var botGenerator = Math.floor(Math.random()*3) + 1;
		switch (botGenerator){
			case (1):
				var botChoice = "rock";
				break;
			case (2):
				var botChoice = "paper";
				break;
			case (3):
				var botChoice = "scissors";
				break;	
				}	;
	
		$("#popup").fadeIn();
		$("#popup").html("Computer chose "+botChoice+" !");
		$("#popup").click(function(){
		$("#popup").fadeOut();
		});

	console.log(userChoice);
	console.log(botChoice);			

		var botWin = 0;
		var humanWin = 0; 

		if	(userChoice === "rock") {
			if (botChoice === "rock") {
				$("#tie").fadeIn().fadeOut();
				botWin = 0;
				humanWin = 0;
			}
			else if (botChoice ==="paper") {
				botWin = 1;
				humanWin = 0;
			}	
			else {
				botWin = 0;
				humanWin = 1;	
			}
    }	
    
		else if (userChoice === "paper") {
			if (botChoice === "paper") {
				$("#tie").fadeIn().fadeOut();
				botWin = 0;
				humanWin = 0;
			}
			else if (botChoice ==="scissors") {
				botWin = 1;
				humanWin = 0;
			}
			else {
				botWin = 0;
				humanWin = 1;
			
			}	
		}
	
		else {
			if (botChoice === "scissors") {
				$("#tie").fadeIn().fadeOut();
				botWin = 0;
				humanWin = 0;
			}
			else if (botChoice ==="rock") {
				botWin = 1;
				humanWin = 0;
			}
			else {
				botWin = 0;
				humanWin = 1;
			}
		};

		console.log(botWin);
		console.log(humanWin);

		var addScores = function (botWin,humanWin){
			botScores.push(botWin);
			humanScores.push(humanWin);}

		addScores(botWin,humanWin);

		console.log(botScores);
		console.log(humanScores);

		console.log(botScore);
		console.log(humanScore);

		var sumScore = function(array1, array2) {
			for (var i = botScores.length -1; i<botScores.length; i++) {
				var botPoint = botScores[i];
				var humanPoint = humanScores[i];
				botScore = botScore + botPoint;
				humanScore = humanScore + humanPoint; 
			}
		};

		sumScore();

		console.log(botScore);
		console.log(humanScore);

		$("#humanScore").each(function(){
			$(this).html(humanScore);

		})
		$("#computerScore").each(function(){
			$(this).html(botScore);
		})
	})
})