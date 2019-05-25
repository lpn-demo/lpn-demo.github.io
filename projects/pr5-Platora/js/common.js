$(function() {

  
	// chech Open Modal
	$(document).on('click', function (e) {
	    var container = $(".checkOpen");
	    if (container.has(e.target).length === 0){
	        container.removeClass('active');
	    }
	});

	//Hedear fix ______________________________________
	function scroll(){
		if( $(window).scrollTop()) {
			$('.header.fix').addClass('active');
		} else {
			$('.header.fix').removeClass('active');
      
		}

    if ($(this).scrollTop() > $(window).height()) {
      $('#btnTop').addClass("active");
    } else {
      $('#btnTop').removeClass("active");
    }

	}
	$(window).scroll(function(){
		scroll()
	});
	scroll();
	
	$(".header").clone()               
  .addClass("fix")         
  .appendTo("header"); 

  $(".header.fix").append('<div class="bg_head"></div>'); 

  // Якорь 
  $(".btncontact").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination - 100
    }, 800);
    return false;
  });
  

  $(".header .openMenu").on('click', function(event) {
    $(this).next(".nav-menu").addClass('active');
    $(".bg_head").addClass('active');
  });
  $(".header .closeMenu").on('click', function(event) {
    $(".nav-menu").removeClass('active');
    $(".bg_head").removeClass('active');
  });
  $(".header .nav-menu li a").on('click', function(event) {
    $(".nav-menu").removeClass('active');
    $(".bg_head").removeClass('active');
  });

  $(".bg_head").click(function (e){ 
    $(".bg_head").removeClass('active');
    $(".nav-menu").removeClass('active'); // если условия выполняются - скрываем наш элемент
  });

  $("#bg").click(function (e){ 
    $("#bg").removeClass('active');
    $(".nav-menu").removeClass('active'); // если условия выполняются - скрываем наш элемент
  });
  
  //Hedear fix ______________________________________END


  // popPup --------------------------------------------------
				  //pop for header

          var data_city = [
          {
            id: '',
            text: 'Популярные:',
            children: [
            { id: '0', text: 'Москва' },
            { id: '1', text: 'Санкт-Петербург' },
            ]
          },
          {
            id: '',
            text: 'А',
            children: [
            { id: '2', text: 'Астрахань' },
            { id: '3', text: 'Анадырь' },
            { id: '4', text: 'Архангельск' },
            { id: '5', text: 'Армавир' }
            ]
          },
          {
            id: '',
            text: 'Б',
            children: [
            { id: '6', text: 'Брянск' },
            { id: '7', text: 'Барнаул' },
            ]
          },
          ];

          var select_city = $('.select-city').select2({
            data: data_city,
            containerCssClass: "container-select-for-city",
            dropdownCssClass: 'dropdown-select-for-city'
          });

          var select_city_mini = $('.select-city-mini').select2({
            data: data_city,
            containerCssClass: "container-select-for-city-mini",
            dropdownCssClass: 'dropdown-select-for-city-mini'
          });


          var text = "<span class='titleCity'>Выберите город</span>";
          $('.select-city').on("select2:open", function(event) {
            $('.dropdown-select-for-city input.select2-search__field').attr('placeholder', 'Поиск города');
            $(".select2-search input").prev().remove();
            $('.select2-search ').prepend(text);
            $(".select2-search input").next().remove();
            $('.select2-search ').append('<hr class="lineGrad">');
          });

          $('.select-city-mini').on("select2:open", function(event) {
            $('.dropdown-select-for-city-mini input.select2-search__field').attr('placeholder', 'Поиск города');
            $(".select2-search input").prev().remove();
            $('.select2-search ').prepend(text);
            $(".select2-search input").next().remove();
            $('.select2-search ').append('<hr class="lineGrad">');
          });

          select_city_mini.on("select2:open", function () {
             $('.select2-results__options').niceScroll({
               cursorcolor: "rgba(190, 196, 206, 0.29)",
               cursorwidth: "6px",
               cursorfixedheight: 80,
             });
           });

           select_city.on("select2:open", function () {
             $('.select2-results__options').niceScroll({
               cursorcolor: "rgba(190, 196, 206, 0.29)",
               cursorwidth: "6px",
               cursorfixedheight: 80,
             });
           });

           $(window).scroll(function(){
            //$('.select-city').select2("close");
            //$('.select-city-mini').select2("close");
          });




           $("a").on('click', function(event) {    
             var popupName = $(this).attr("data-href");
             var id = "#" + popupName;
             $(id).addClass('active');
             $(this).preventDefault;

             if($(this).hasAttr("data-href")){
               $("#bg").addClass('active');
             }
           });

           $.fn.hasAttr = function(name) {  
             return this.attr(name) !== undefined;
           };

           
           var maxCharts = $('#sessionNum');
           var max_length = maxCharts.attr('maxlength');
           if(max_length >0){
             maxCharts.bind('keyup' , function(e){
               var length = new Number(maxCharts.val().length);
               var counter = max_length - length;
               $('#sessionNum_count').text(counter);
             });
           }


           $('#myModal').on('shown.bs.modal', function () {
             $('#myInput').trigger('focus')
           })
				 	$(".popupsAll .popHeader").clone().appendTo("header .popup-local");
				 	
          // $(".btnOpen").on('click', function(event) {
          //   var popupName = $(this).attr("data-modal");
          //   var id = "#" + popupName;
          //   $(".preloader").addClass('active');
          //   setTimeout(function(){
          //     $(".preloader").removeClass('active');
          //     $(id).addClass('active');
          //     $("#bg").addClass('active');
          //   }, 3000);  
          // });

          // $(".closePopup").on('click', function(event) {
          //    $(".popup").removeClass('active');
          //    $("#bg").removeClass('active');
          // });

          $(".popupRequest .form .send").submit(function( event ) {
            $(".popupRequest").removeClass('active');
            $("#bg").removeClass('active');
            event.preventDefault();
          });


 	// popPup --------------------------------------------------End



  $('.multiSelect').addClass('checkOpen');

	// combobox

 	$('.multiSelect').on('click', function(event) {
 		$(this).toggleClass('active');
 	});


   $('.multiSelect li.option').click(function() {
     var id = $(this).closest('.multiSelect');
     var ID = id.attr('data-atr');
     $("#"+ ID).html($(this).html());
     });


   var data_value = [
     { id: 'USA', text: 'Доллар США' },
     { id: 'EUR', text: 'Евро' },
     { id: 'SEK', text: 'Шведская крона' },
     { id: 'CAD', text: 'Канадский доллар' },
     { id: 'CNY', text: 'Китайский юянь' },
   ];

   var sel = $(".select-for-table").select2({
      data: data_value,
      templateResult: setCurrency,
      templateSelection: setCurrency,
      minimumResultsForSearch: -1,
      containerCssClass: "container-select-for-table",
      dropdownCssClass: 'dropdown-select-for-table'
    });



   var data_month = [
     { id: '0', month: 'Ноябрь', year: '2018' },
     { id: '1', month: 'Октябрь', year: '2018' },
     { id: '2', month: 'Сентябрь', year: '2018' },
   ];

   var selectMonth = $(".selectMonth").select2({
      data: data_month,
      templateResult: setCurrencyMonth,
      templateSelection: setCurrencyMonth,
      minimumResultsForSearch: -1,
      containerCssClass: "container-select-for-month",
      dropdownCssClass: 'dropdown-select-for-month',
      dropdownParent: $('.container')
    });

   selectMonth.on("select2:open", function () {
     
   });

   function setCurrencyMonth (data_month) {
    if (!data_month.id) { return data_month.text; }
    var $currency = $("<span>" + data_month.month +" "+ data_month.year + "<span>");
    return $currency;
  };

   function setCurrency (data_value) {
    if (!data_value.id) { return data_value.text; }
    var $currency = $("<img class='flag' src='img/flags/" + data_value.id + ".png'/> "+ 
                      "<span class='descrFlag'>" + data_value.text + '</span>');
    return $currency;
  };



   // Top Lable for tables
  var array_top = [];
  function setTopLable() {
    array_top = [];
    $.each($('.myTable'), function (key, value1) {

      $.each($(value1).find(".TableTop"), function (key, value) {
        var topUniqName, topText;
        var topClassList = value.className.split(" ");

        for (var i = 0; i < topClassList.length; i++) {
          var a = topClassList[i].indexOf('_uniq_');
          if (a > -1) {
            topUniqName = topClassList[i];
            topText = topUniqName.split('_uniq_')[1];
          }
        }

        var blockTop = '<div class="BlockTop ' + topUniqName + ' ">TOP ' + topText + '</div>';

           // Check class table_id tr
            $(value1).find(".BlockTop." + topUniqName).remove();
            var r = $(value1).find(".table_id tr." + topUniqName);
            if (r.length > 0) {
              $(value1).append(blockTop);
            }


        var offset = $(value1).find("." + topUniqName).offset();
        var offset2 = $(value1).offset();
        $(value1).find(".BlockTop." + topUniqName).offset({ left: offset2.left - 60, top: offset.top + 22 });

        array_top.push(topUniqName);
      });
    });

    $(window).resize(function () {
      $.each($('.myTable'), function (key, value1) {
        array_top.forEach(function (item) {
          var offset = $(value1).find("." + item).offset();
          var offset2 = $(value1).offset();
          if (offset != undefined && offset != null) {
            $(value1).find(".BlockTop." + item).offset({ left: offset2.left - 60, top: offset.top + 22 });

          }
        });
      });
    });
  }
  setTopLable();

// delete BlockTop
      $('.table_id').on('draw.dt', function () {
        $.each($('.myTable'), function (key, value1) {
            array_top.forEach(function (item) {
              var r = $(value1).find(".table_id tr." + item);
              if (r.length == 0) {
                $(value1).find(".BlockTop." + item).remove();
              }
            });
          });
          setTopLable();
      });

 



 // imput auto with
  $("input").autoGrowInput({minWidth:44});

  // Button Top
  $('#btnTop').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  });
  // Button Top end


});

(function($){

    $.fn.autoGrowInput = function(o) {

        o = $.extend({
            maxWidth: 125,
            minWidth: 44
        }, o);

        this.filter('input:text').each(function(){

            var minWidth = o.minWidth || $(this).width(),
                val = '',
                input = $(this),
                testSubject = $('<tester/>').css({
                    position: 'absolute',
                    top: -9999,
                    left: -9999,
                    width: 'auto',
                    fontSize: input.css('fontSize'),
                    fontFamily: input.css('fontFamily'),
                    fontWeight: input.css('fontWeight'),
                    letterSpacing: input.css('letterSpacing'),
                    whiteSpace: 'nowrap'
                }),
                check = function() {

                    if (val === (val = input.val())) {return;}

                    // Enter new content into testSubject
                    var escaped = val.replace(/&/g, '&amp;').replace(/\s/g,'&nbsp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                    testSubject.html(escaped);

                    // Calculate new width + whether to change

                    var testerWidth = testSubject.width();
                    var newWidth = (testerWidth) >= minWidth ? testerWidth : minWidth;
                        // newWidth += 20;
                    var currentWidth = input.width(),
                        isValidWidthChange = (newWidth < currentWidth && newWidth >= minWidth)
                                             || (newWidth > minWidth && newWidth < o.maxWidth);

                    // Animate width
                    if (isValidWidthChange) {
                        input.width(newWidth);
                    }

                };

            testSubject.insertAfter(input);

            $(this).bind('keyup keydown update', check);

        });

        return this;

    };

})(jQuery);