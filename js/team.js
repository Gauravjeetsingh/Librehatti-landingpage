var sliderOpen = false;
var sliders = []

$(".dev").click(function(){

	$(".team-members").css("display", "none");
	$(".slider-container").css("display", "block");

	$('.slider').each(function() {
	  sliders.push(new Slider(this))
	})

	var clickIndex = parseInt($(this).attr("id"))
	sliders[0].goTo(clickIndex);
	sliderOpen = true;
});

$(document).keydown(function(event)
{
	switch(event.which){
	case 27: hideSlider();
		 break;
	}
});

$("#team-heading").click(function(){
	hideSlider();
});

function hideSlider(){
	$(".slider-container").css("display", "none");
	$(".team-members").css("display", "block");
	sliderOpen = false;
}


$(document).keydown(function(event)
{
	switch(event.which){
	case 37: if(sliderOpen) { sliders[0].goToPrev(); } else { console.log("slider closed"); }
		 break;
	case 39: if(sliderOpen) { sliders[0].goToNext(); } else { console.log("slider closed"); }
		 break;
	}
});
