var SpeachRecognation=window.webkitSpeechRecognition;
var recognition= new SpeachRecognation;
function start(){
    document.getElementById("textbox").innerHTML='';
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
        var content=event.results[0][0].transcript;
        document.getElementById("textbox").innerHTML=content;
        speak();   
} 
camera=document.getElementById('camera');
function speak(){
    var synth=window.speechSynthesis;
    speak_data="TAKING YOUR SELFIE IN FIVE SECONDS";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save ();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:"jpg",
    jpg_quality:90
});
function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';

    });
}
function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie_image").src ;
link.href=img;
link.click();
}