//document is a parant to acces element in html file document.getElementById method is used to get element in html file with help of id
let textEle =document.getElementById("text")//text , voicelist , speak are the id
let voiceEle =document.getElementById("voicelist")// document.getElementById("id") is a methad to get the input value text
let speakEle =document.getElementById("speak")
//console.log(text) it print <textarea>tag
let speechSynth = speechSynthesis 

speechSynth.addEventListener("voiceschanged",loadvoices) //addEventListener method is used to when the action happened the loadvoice metho call
// voicechanged is event of wed speech api is fired ,becacuse the list of voices changes when chrome finishes making an api call to get the list of voices
// loadvoices method is user defined function it used to display list of voices in voice box
function loadvoices(){
    let voices = speechSynth.getVoices() //getvoice method is used to get list of all supported voices which the device suports
    for (voice of voices){
        let option = document.createElement('option') // createElement is method to create element(tag) useing js
        option.value=voice.name; //option.value is for server side 
        option.innerText= `${voice.name} ${voice.lang}` // innerText method is used for adding the cotent between tag 
        voiceEle.appendChild(option) // voiceEle is parent id appenndChild method is used to add option tag in select tag in html file
    }
}
// textToSeech function is used to speek the text
function textToSpeech(text){
    let utterance = new SpeechSynthesisUtterance(text); //creating the instance to the speechSynthesisUtterance class ,for arrange this instance with various properties
    for(let voice of speechSynth.getVoices()){
        if(voice.name == voiceEle.value){
            utterance.voice=voice; // it is a roperty of the speechSynthesisUtterance interface gets and sets the voice that will be used to speak the utterance
        }
    }
    speechSynth.speak(utterance); // this method is used to play the speech
}
/* speak is a id name in html button tag*/
// when user clicl the button 
speak.addEventListener("click",function(){
    if(textEle.value!==""){
        if(!speechSynth.speaking){
            textToSpeech(textEle.value); // passing the text to textToSpeech funcion

        }
    }
    else{
        alert("Enter some text")
    }
});
