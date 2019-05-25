$(function() {

	$('#navigation li a').on('click', function(event) {
		event.preventDefault();
		var href = $(this).attr('href');
		var h = $(href);

		$("html, body").animate({
			scrollTop: h.offset().top
		}, 400);

	});

	$('.carousel').magnificPopup({
		delegate: 'a',
		type: 'image'
	});


	$('.carousel').slick({
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 3,
		arrows: true,
		responsive: [
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	$('.top').click(function() {
		$('html, body').stop().animate({
			scrollTop: 0
		}, 'slow', 'swing');
	});

	function popImg() {
		var images = $('.carousel .item img');
		images.each(function(i, el) {
			$(el).before('<a href="' + $(el).attr('src') + '"><i class="fas fa-search-plus"></i> </a>');
		});
	}
	popImg();
	

	$(".preloader").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});