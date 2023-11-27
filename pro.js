const speakBtn = document.getElementById("btn");

const text = document.getElementById("text");


function playSpeech(){
const  speech = new SpeechSynthesisUtterance(text.value);



speechSynthesis.speak(speech);


}
speakBtn.addEventListener("click", playSpeech);
