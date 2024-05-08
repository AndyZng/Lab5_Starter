// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
   const synth = window.speechSynthesis;

    const voiceSelect = document.querySelector("select");


    let voices = [];

    function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
    }

    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
    }

   var text = document.getElementById("text-to-speak");
   var button = document.querySelector("button");
   var image = document.querySelector("img");
   button.addEventListener('click', function(){
    var utterance = new SpeechSynthesisUtterance(text.value);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
    }
  }
    image.src = "assets/images/smiling-open.png";
    speechSynthesis.speak(utterance);
    utterance.addEventListener('end', function(){
      image.src = "assets/images/smiling.png";
    })
   })
   
}