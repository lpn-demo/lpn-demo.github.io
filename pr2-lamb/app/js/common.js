$(function() {

	$('.btn_open').on('click', function(){
		$(this).fadeOut();
		$('.bg').fadeIn();
		$('.btn_close').fadeIn();	
		$('.top-line .nav').fadeIn();

	});

	$('.btn_close').on('click', function(){
		$(this).fadeOut();
		$('.bg').fadeOut();
		$('.btn_open').fadeIn();	
		$('.top-line .nav').fadeOut();

	});

	$('.top-line .nav a').on('click', function(){
		$('.bg').fadeOut();
		$('.btn_open').fadeIn();	
		$('.top-line .nav').fadeOut();
		$('.btn_close').fadeOut();	
	});




});