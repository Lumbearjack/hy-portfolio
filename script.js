$('#goToStart').click(function(){
	$('html, body').animate({
		scrollTop: $("#start").offset().top
	}, 900);
});