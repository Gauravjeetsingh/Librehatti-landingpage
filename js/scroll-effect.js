$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var maxheight = $("#home").height() + 70;
    if (scroll >= maxheight) {
        $(".header").addClass( "small-header");
    } else {
        $(".header").removeClass("small-header");
    }
});


$(".home-menu").click(function() {
    $('html, body').animate({ scrollTop:$("#home").offset().top}, 500);
});

$(".team-menu").click(function() {
    $('html, body').animate({ scrollTop:$("#team").offset().top}, 500);
});

$(".install-menu").click(function() {
    $('html, body').animate({ scrollTop:$("#install").offset().top}, 500);
});

$(".contact-menu").click(function() {
    $('html, body').animate({ scrollTop:$("#contact").offset().top}, 500);
});

$(".contribute-menu").click(function() {
    $('html, body').animate({ scrollTop:$("#contribute").offset().top }, 500);
});
