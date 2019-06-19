$(function() {


$('.startGame').click(function() {
	$('.title').css('display', 'none');
	$('.sample').fadeIn(400);
	$(this).css('display', 'none');
});



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


Vue.component('card', {
      props: ['name', 'icon', 'index', 'flag', 'fliped'],
      data: function () {
        return {

        }
      },
      methods:{
        onSelect(val, event){
            this.$emit('my-select', val); 
        },

      },
      template: '<div class="flip-container"  @click ="onSelect(name, $event)">'+
                    '<div class="flipper" :class="{active: this.fliped}">' +
                        '<div class="front">' + 
                        '</div>'+
                        '<div class="back">' + 
                            '<i class="fab" :class="icon"></i>'+
                        '</div>'+
                    '</div>'+
                '</div>'
    });


    let sample = new Vue({
        el: '.sample',
        data: {
           data: getCard(),
           flags: [],
           check: [],
           endGame: 0,
           disabledClick: false
        },
        created() {
            for (var i = 0; i < this.data.length; i++) {
                this.flags.push({
                    found : false,
                    fliped: false,
                })  
            }
        },
        computed: {
            dataList(){
               return this.data.sort(function(){
                  return Math.random() - 0.5;
              });
           },
           finis(){
            if (this.endGame == this.flags.length ) {
                return true;
            }
           },
           progrWidth(){
                return {
                    width : (100 / this.flags.length * this.endGame) + '%',
                };
            }
        },

        methods:{
           validCard(val, i){
            if (this.disabledClick) {
                return;
            }
            this.flags[i].fliped = true;
            if (this.flags[i].found) {
                return;
            }

            this.check.push({value: val, index: i});
            let display, thisCard, displayIndex, thisCardIndex;

            if (this.check.length == 2 ) {
                this.disabledClick = true;
                display  = this.check[0].value;
                displayIndex  = this.check[0].index;
                thisCard = this.check[1].value;
                thisCardIndex  = this.check[1].index;

               if (this.check[0].index == i){
                    this.check.splice(1, 1);
                    return;
                } 

                if (display === thisCard) {
                    this.flags[displayIndex].found = true;
                    this.flags[thisCardIndex].found = true;
                    this.endGame += 2;
                    this.check = [];
                    this.disabledClick = false;
                } else {
                    this.flags[displayIndex].fliped = true;
                    this.flags[thisCardIndex].fliped = true;
                    setTimeout(() => {
                        this.flags[displayIndex].fliped = false;
                        this.flags[thisCardIndex].fliped = false;
                        this.check = [];
                        this.disabledClick = false;
                    }, 1000); 
                }               
            }
        }
    }
});

    function getCard(){
        return [
            {
                name: 'js',
                icon: 'fa-js',
            },
            {
                name: 'js',
                icon: 'fa-js',
            },
            {
                name: 'html',
                icon: 'fa-html5',
            },
            {
                name: 'html',
                icon: 'fa-html5',
            },
            {
                name: 'css',
                icon: 'fa-css3',
            },
            {
                name: 'css',
                icon: 'fa-css3',
            },
            {
                name: 'vue',
                icon: 'fa-vuejs',
            },
            {
                name: 'vue',
                icon: 'fa-vuejs',
            },
            {
                name: 'bootstrap',
                icon: 'fa-bootstrap',
            },
            {
                name: 'bootstrap',
                icon: 'fa-bootstrap',
            },
            {
                name: 'git',
                icon: 'fa-github-square',
            },
            {
                name: 'git',
                icon: 'fa-github-square',
            },
        ]


    }