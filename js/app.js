
$(document).ready(function(){
	
<<<<<<< HEAD
	var num = Math.floor(Math.random()*100) + 1;
		console.log(num);
	
	
	
	$('form').on("click", "#guessButton", function(){

		console.log('its clicked');
	
		var guess = $('#userGuess').val();
		guess = parseInt(guess);


			if(guess <=100) {
				$('#guessList').append("<li>"+guess+"</li>");
				console.log('its a number');
				
			}
		});

///		function diff(){

//			if(guess>num){
				
//				console.log(guess-num);
				//}
//			else if (num> guess){
				
//				console.log(num - guess);
				
//			}
//			else if (num == guess){
				
//				console.log("You Won!");
				
//	}
//		};
		//diff();
	//	if( i <=20){
	//		console.log('warm');
	//	}
	//	else if(20<1<=50){
	//		console.log('cold');
	//	}
	//	else if(i = "You Won!"){
	//		console.log('you won');
	//	}

		
		
	


=======
>>>>>>> 209c990e47738728b5a7e870f496e9ac69125bf2
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


