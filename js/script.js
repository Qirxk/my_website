 AOS.init({
     duration: 800,
     easing: 'slide',
     once: true
 });

	var hauteur = $("section").height();
	var hauteurnav = $(".header").height();
	var  x = $(document).scrollTop();
	var encre = $(".fleche");
	var firstLinks = $("#first_link");


$(document).ready(function(){
	firstLinks.addClass("active");
	$(".loader-wrapper").fadeOut("slow");

	if ($(document).width() < 991) {
		$("ul li a").click(function(e){
			var element = $(".navigation");
			element.fadeToggle("show");
		})
	}
	$(".scrollDown").click(function(e){
		e.preventDefault();
		$('body').animate({scrollTop: (hauteur)}, 1000, 'swing')
		if (x==$(document).scrollTop())
		{$(document).scrollTop(0)}
		
	});
	$('.fleche').click(function(){
	var  x = $(document).scrollTop();
	$('body').animate({scrollTop: 0}, 1000, 'swing')
	if (x==$(document).scrollTop())
	{$(document).scrollTop(0)}
	});

	$(".opens").each(function(){
    $(this).on("click",function(e){
    	e.preventDefault();
    	$(".readmore").fadeOut(400);
        var id = $(this).attr('id');
        $("."+id).fadeIn(400);
    })
})
	$(".closes").each(function(){
	$(this).click(function(e){
		e.preventDefault();
		var id = $(this).attr('id');
		var ones = id.replace("close","one");
		$("."+ones).fadeOut(400);
		});
	});

  var OnePageNavigation = function () {
      var navToggler = $('.site-menu-toggle');
      $("body").on("click", ".navigation li a[href^='#']", function (e) {
          e.preventDefault();

          var hash = this.hash;

          $('html, body').animate({
              'scrollTop': $(hash).offset().top
          }, 600, 'easeInOutCirc', function () {
              window.location.hash = hash;
          });

      });
  };
  OnePageNavigation();

});
$(window).scroll(function(){
	var  wScroll = $(this).scrollTop()
	if($(document).width()<991){
		// console.log(hauteur);
		// console.log($(document).scrollTop());
		if($(document).scrollTop() > (hauteurnav+1)){
			$(".header").css({
				"position":"fixed",
				"color":"#000",
				"background":"#fff"
			});

			if($(document).scrollTop() > (hauteur-2)){
				$(".header").css({
					"color":"#000",
					"background":"#fff"
				})
				encre.addClass('ancre-a');/**** ajoute la classe ancre-a***/
			}
			else if($(document).scrollTop() < (hauteur-2) && $(document).scrollTop() > (hauteurnav+1)){
				$(".header").css({
					"color":"#000",
					"background":"rgba(255,255,255,0.8)"
				})
			}
			else{
				$(".header").css({
				"position":"auto",
				"color":"#000",
				"background":"none"
			});
				encre.removeClass('ancre-a');/**** retire la classe ancre-a***/
			}
		}
		else{
			$(".header").css({
				"position":"auto",
				"color":"#000",
				"background":"none"
			});
			encre.removeClass('ancre-a');/**** retire la classe ancre-a***/
		}
	}
	else{
		if($(document).scrollTop() > (hauteurnav+1)){	
		$(".attend").addClass("nav navbar fixed-top bg-white shadow-sm");
		$(".attend").removeClass("header");
		$(".attend").css({
			"color":"#000",
			"padding":0
		});
			if(wScroll>(hauteur-100)){
				$(".myPics").css({
					"transform":"translatex(0)"
				});
			}
			else if(wScroll<(hauteur-100)){
				// $(".myPics").css({
				// 	"transform":"translatex(-1000px)",
				// 	"transition":"2s"
				// });
			}
			if($(document).scrollTop() > (hauteur-2)){
				$(".attend").css({
					"color":"#000",
					"padding":0

				});
				$(".emoji").css({
					"color":"#000"
				});
				$(".span").css({
					"color":"#000"
				});

				$(".attend").addClass("nav navbar fixed-top bg-white shadow-sm");
				$(".attend").removeClass("header");
				encre.addClass('ancre-a');/**** ajoute la classe ancre-a***/

			}
			else if($(document).scrollTop() < (hauteur-2) && $(document).scrollTop() > (hauteurnav+1)){
				$(".attend").css({
					"color":"#000",
					"background":"rgba(255,255,255,0.9)",
					"padding":0
				});
				$(".emoji").css({
					"color":"#000"
				});
				$(".span").css({
					"color":"#000"
				});
				$(".attend").removeClass("nav navbar fixed-top bg-white shadow-sm");
				$(".attend").addClass("nav navbar fixed-top");
				$(".attend").removeClass("header");
			}
			else{
				$(".attend").css({
					"color":"#000",
					"background":"none"
				});
				$(".emoji").css({
					"color":"#000"
				});
				$(".span").css({
					"color":"#000"
				});

				$(".attend").removeClass("nav navbar fixed-top bg-white shadow-sm");
				$(".attend").addClass("header");
				encre.removeClass('ancre-a');/**** retire la classe ancre-a***/
				
				
			}
	}
	else{
		$(".attend").css({
			"color":"#000",
			"background":"none"
		});
		$(".emoji").css({
			"color":"#000"
		});
		$(".span").css({
			"color":"#000"
		});

		$(".attend").removeClass("nav navbar fixed-top bg-white shadow-sm");
		$(".attend").addClass("header");
		encre.removeClass('ancre-a');/**** retire la classe ancre-a***/
	}
	}
	
});
function menuToggle(){
	var element = $(".navigation");
	element.fadeToggle("show");
}