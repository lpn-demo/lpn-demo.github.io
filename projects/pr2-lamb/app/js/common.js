$(function() {

	$('.btn_open').on('click', function(){
		$(this).fadeOut();
		$('.bg').fadeIn();
		$('.btn_close').fadeIn();	
		$('.top-line .nav').addClass('active');
	});

	$('.btn_close').on('click', function(){
		$(this).fadeOut();
		$('.bg').fadeOut();
		$('.btn_open').fadeIn();	
		$('.top-line .nav').removeClass('active');

	});

	$('.top-line .nav a').on('click', function(){
		if ($('.top-line .nav').hasClass('active')) {
			$('.bg').fadeOut();
			$('.btn_open').fadeIn();	
			$('.btn_close').fadeOut();	
			$('.top-line .nav').removeClass('active');
		}
		
	});




});