  $( function() {
    $( "#input-check-in,#input-check-out").datepicker();
  } );

// Rooms  
let rooms = document.querySelector("#rooms")
generate_element(rooms)
// Adult 
let adult = document.querySelector("#adult")
generate_element(adult)
// Children
let children = document.querySelector("#children")
generate_element(children)

// Slick Slider In Use Plagin 
$(document).ready(function(){
  $('.level-slider').slick({
    dots:true,
    slidesToShow:2,
    slidesToScroll:1,
    arrows:false,
  });
});
		
// Play Video 
let play_video = document.querySelector(".video-control-play")
let stop_video = document.querySelector(".video-control-stop")
let video = document.querySelector(".level-vedio")

play_video.onclick = function(){
  this.style.display = "none"
  stop_video.style.display = "block"
  video_toggle(video)
}

stop_video.onclick = function(){
    this.style.display = "none"
    play_video.style.display = "block"
  video_toggle(video)
}







function generate_element(element){
    for(let i=1;i<=10;i++){
        element.innerHTML += `<option value="${i}">${i}</option>`
    }
}

function video_toggle(video){

  if(video.paused){
      video.play()
  }else {
      video.pause()
  }
}