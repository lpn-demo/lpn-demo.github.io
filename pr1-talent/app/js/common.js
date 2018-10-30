$(function() {

    $(".hamburger").on('click', function(){
        $(this).toggleClass('is-active');
        $("header .menu").fadeToggle('300');
        $("header .bg").toggleClass('active');
    });

    $("header .menu li").on('click', function(){
        $('.hamburger').toggleClass('is-active');
        $("header .menu").fadeToggle('300');
        $("header .bg").toggleClass('active');
    });

    

    $(".filtr-container").filterizr(), 
    $(".filtr-button").click(function() {
        $(".filtr-button").removeClass("active"), 
        $(this).addClass("active").data("filter")
    });

    $(".myVideo").bgVideo({
        fullScreen: false, // Sets the video to be fixed to the full window - your <video> and it's container should be direct descendents of the <body> tag
        fadeIn: 500, // Milliseconds to fade video in/out (0 for no fade)
        pauseAfter: 120, // Seconds to play before pausing (0 for forever)
        fadeOnPause: true, // For all (including manual) pauses
        fadeOnEnd: true, // When we've reached the pauseAfter time
        showPausePlay: true, // Show pause/play button
        pausePlayXPos: 'center', // left|right|center
        pausePlayYPos: 'center', // top|bottom|center
    });

    $(".carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveRefreshRate: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

});