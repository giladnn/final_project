var theThing = document.querySelector("#thing");
var container = document.querySelector("#contentContainer");
if(container){
	container.addEventListener("click", function(event) {
		var xPosition = event.clientX - container.getBoundingClientRect().left - (theThing.clientWidth / 2);
		var yPosition = event.clientY - container.getBoundingClientRect().top - (theThing.clientHeight / 2);
		// in case of a wide border, the boarder-width needs to be considered in the formula above
		theThing.style.left = xPosition + "px";
		theThing.style.top = yPosition + "px";
		}
	);
}

(function makeDiv(){
	var divsize = ((Math.random()*100) + 50).toFixed();
	var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
	$newdiv = $('<div/>').css({
		'width':divsize+'px',
		'height':divsize+'px',
		'background-color': color
	});
	
	var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
	var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
	$('body').append($newdiv.css({
		'position':'absolute',
		'left':posx+'px',
		'top':posy+'px',
		'display':'none'
	}))
	
	// .fadeIn(100).delay(300).fadeOut(200, function(){
	// 	$(this).remove();
	// 	makeDiv(); 
	//  }); ;

	$newdiv
		.fadeIn(100).delay(300).fadeOut(200, function(){
			$(this).remove();
			makeDiv(); 
		 }); ;
	// $newdiv.css({
	// 	'position':'absolute',
	// 	'left':posx+'px',
	// 	'top':posy+'px',
	// 	'display':'none'
	// }).appendTo( 'body' ).fadeIn(100).delay(300).fadeOut(200, function(){
	//    $(this).remove();
	//    makeDiv(); 
	// }); 
})();


