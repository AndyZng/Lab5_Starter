// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {

  var selector = document.getElementById("horn-select");
  var img = document.querySelectorAll("img");
  var audio = document.querySelector("audio");
  var slider = document.getElementById("volume");
  var audioButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();
  selector.addEventListener('change', function(){
  img[0].src = "assets/images/" + selector.value+'.svg';
  audio.src = "assets/audio/" + selector.value+'.mp3';
  }
)
  slider.addEventListener('change', function(){
    if(slider.value == 0){
      img[1].src = "assets/icons/volume-level-0.svg";
    }
    else if(slider.value > 0 && slider.value < 33){
      img[1].src = "assets/icons/volume-level-1.svg";
    }
    else if(slider.value > 33 && slider.value < 66){
      img[1].src = "assets/icons/volume-level-2.svg";
    }
    else{
      img[1].src = "assets/icons/volume-level-3.svg";
    }
  })
  audioButton.addEventListener('click', function(){
    if(selector.value == "party-horn"){
      jsConfetti.addConfetti()
    }
    audio.volume = (slider.value/100);
    audio.play();
  })
 


}