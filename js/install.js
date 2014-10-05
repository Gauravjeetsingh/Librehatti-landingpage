$('.step1').hover( function(){
		$('#prerequisite-heading').animate({color: "#06b9fb"}, 900);
	}, function(){
		$('#prerequisite-heading').animate({color: "#ccc"}, 500);
	});

$('.step2').hover( function(){
		$('#download-heading').animate({color: "#06b9fb"}, 900);
	}, function(){
		$('#download-heading').animate({color: "#ccc"}, 500);
	});

$('.step3').hover( function(){
		$('#install-heading').animate({color: "#06b9fb"}, 900);
	}, function(){
		$('#install-heading').animate({color: "#ccc"}, 500);
	});

$('.submit-btn').hover( function() {
		$('.submit-btn').animate({"background-color": "#0f84b0"}, 400);
	}, function(){
		$('.submit-btn').animate({"background-color": "#06b9fb"},400);
	});

 $(function () {
     var icons = {
         header: "iconClosed",    
         activeHeader: "iconOpen"
     };
     $("#accordion").accordion({
         icons: icons
     });
 });
