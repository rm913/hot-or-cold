
$(document).ready(function(){
	
	function random() {

		Math.floor(Math.random()*100) + 1;
		
	};
	console.log(random);
	$('#guessButton').click(function(){
		var guess = $('#userGuess').val();
		var num = random().val();

		if(guess < num){
			console.log('were lesss than this');
		}
		else{
			console.log('maybe more than that');
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


