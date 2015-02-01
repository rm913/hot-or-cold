
 function generateNum(){

	 return Math.floor(Math.random()*100) + 1;
	}
	generateNum();
	var newNum = generateNum();
	
	

$(document).ready(function(){
	
	
	
	
	
	$('#guessButton').click(function(){
			event.preventDefault();
		var guess = $('#userGuess').val();
		guess = parseInt(guess);
		console.log(guess, 'its clicked');
		console.log(newNum);
		
		


			if(1<= guess <=100) {
				$('#guessList').append("<li>"+guess+"</li>");
				var diff =  Math.abs(newNum - guess);

				console.log(diff);
				if(diff >=70){
					console.log('freezing cold');
				}
				else if(diff >= 50){
					console.log('cold');
				}
				else if(diff >=30){
					console.log('getting warmer');
				}
				else if(diff >=10){
					console.log('hot');
				}
				else if(diff >=5){
					console.log('boiling hot!');
				}
				else if(diff == 0){
					console.log('we have a winner');
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


