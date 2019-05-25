$(function() {


   // slider -------------------------------------------------------
   $('.slider').owlCarousel({
        items:1,
        center:true,
        margin:0,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        nav: true,
        loop: true,
        dotsContainer: '.wrapperSlider .nav-slider',
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
              '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    });


    $('.slider').on('changed.owl.carousel', function(event) {
      event.preventDefault();
      $(".wrapperSlider .owl-item .item").removeClass('active');
      $('.wrapperSlider .btnTurn').removeClass('active');
      $('.wrapperSlider .btnTurn').text('Передняя сторона');
    });
    

   $('.wrapperSlider .nav-slider a').click(function() {
     $(".wrapperSlider .owl-item .item").removeClass('active');
     $('.wrapperSlider .btnTurn').removeClass('active');
   });

   $('.wrapperSlider .btnTurn').click(function() {
      var atr = $(".wrapperSlider .nav-slider li.active a").attr('href').replace("#", "");
      var hash = $("[data-hash ="+ atr +"]");
      hash.toggleClass('active');
      $(this).toggleClass('active'); 
      var text = $(this).text() == 'Передняя сторона' ? 'Обратная сторона' : 'Передняя сторона';
      $(this).text(text);
   });




   


   // slider -------------------------------------------------------end

});


