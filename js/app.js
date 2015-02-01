

$(document).ready(function(){
	
	function newNum(){

	 return Math.floor(Math.random()*100) + 1;
	}

	
	
	
	
	$('#guessButton').click(function(){
		var guess = $('#userGuess').val();
		guess = parseInt(guess);
		console.log(guess, 'its clicked');
	
		
		


			if(guess <=100) {
				$('#guessList').append("<li>"+guess+"</li>");
				console.log('its a number');
		
			}
			else{
				alert('Please put in a # between 1 and 100');
			}
		});

	

	/*--- Display information modal box ---*/
//  	$(".what").click(function(){
//    	$(".overlay").fadeIn(1000);

//  	});

  	/*--- Hide information modal box ---*/
//  	$("a.close").click(function(){
//  		$(".overlay").fadeOut(1000);
 // 	});

});


