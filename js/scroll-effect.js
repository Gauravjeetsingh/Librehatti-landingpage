
/*		$('nav').click(function(){
			$('nav a[href^="#' + $(location).attr('href').split("#")[1] + '"]').addClass('active');
		});*/




$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var maxheight = $("#home").height() + 230;
    if (scroll >= maxheight) {
        $(".header").addClass( "small-header");
    } else {
        $(".header").removeClass("small-header");
    }
});


$(".home-menu").click(function() {
    $('html, body').animate({ scrollTop:$("#home").offset().top - 100}, 500);
});

$(".team-menu").click(function() {
    $('html, body').animate({ scrollTop:$("#team").offset().top - 50}, 500);
});

$(".install-menu").click(function() {
    $('html, body').animate({ scrollTop:$("#install").offset().top - 20}, 500);
});

$(".contact-menu").click(function() {
    $('html, body').animate({ scrollTop:$("#contact").offset().top - 20}, 500);
});
