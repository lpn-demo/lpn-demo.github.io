$(function() {

  $('.nav a').click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });



	$('.switch input').on('click', function(event) {
		var checked = $(this).is(":checked");
		if (checked) {
			$('.preloader').fadeOut('slow', function() {
				$('.greeting .text').addClass('active');
				setTimeout(function(){
					$('.greeting').fadeOut('slow');
				}, 2000);
			});
		}
	});


	$('.copyMail').click(function() {
		$(this).focus();
		$(this).select();
		document.execCommand('copy');
	});

		
	$("#flipbook").turn({
		autoCenter: true,
	});

	$("#flipbook").bind("turning", function(event, page, view) {
		var lastPage = $("#flipbook").turn("pages");
	  if (page == lastPage - 2) {
	    event.preventDefault();
	  }
	});

});

