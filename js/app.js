
 function generateNum(){

	 return Math.floor(Math.random()*100) + 1;
	}
	generateNum();
	var newNum = generateNum();
	var counter = 1;
	
	

$(document).ready(function(){
	
	
	
	
	
	$('#guessButton').click(function(){
			event.preventDefault();
		var guess = $('#userGuess').val();
		guess = parseInt(guess);
		console.log(guess, 'its clicked');
		console.log(newNum);
		
		


			if(1<= guess <=100) {
				$('#guessList').append("<li>"+guess+"</li>");
				$('#count').html(counter++);
				var diff =  Math.abs(newNum - guess);

				console.log(diff);
				if(diff >=70){
					$('#feedback').html("<h3>"+"You are Freezing cold!" + "</h3");
				}
				else if(diff >= 50){
					$('#feedback').html("<h3>"+"You are cold!" + "</h3");
				}
				else if(diff >=30){
					$('#feedback').html("<h3>"+"You are getting warmer!" + "</h3");
				}
				else if(diff >=10){
					$('#feedback').html("<h3>"+"getting pretty hot now!" + "</h3");
				}
				else if(diff >=5){
					$('#feedback').html("<h3>"+"Boiling Hot!" + "</h3");
				}
				else if(diff == 0){
					$('#feedback').html("<h3>"+"We have a winner!" + "</h3");
				}

		
			}
			else{
				alert('Please put in a # between 1 and 100');
			}
		});

	

	/*--- Display information modal box ---*/
 	$(".what").click(function(){
   	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
	});

});


