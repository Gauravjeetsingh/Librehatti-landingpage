var video;

video = document.getElementById("video-player");

video.addEventListener('click',function(){
video.play();
},false);

$('#video-player').hover(
function toggleControls() {
  if (video.hasAttribute("controls")) {
     video.removeAttribute("controls")   
  } else {
     video.setAttribute("controls","controls")   
  }
});
