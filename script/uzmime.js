const constraints = {
    video: true
  };
  
  const container = document.querySelector('#container');
  const img = document.querySelector('#container img');
  const video = document.querySelector('#container video');
  var imgData;
  const canvas = document.querySelector('#videoCanvas');
  const ctx = canvas.getContext('2d');
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
     navigator.mediaDevices.getUserMedia(constraints).
      then(handleSuccess);
      document.body.classList.add('loaded');
  });
  
  setInterval(function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
      ctx.filter = 'blur(1px) grayscale(100%) brightness(140%) contrast(90)';
    ctx.drawImage(video, 0, 0); document.querySelector("#light").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', canvas.toDataURL('image/jpg'));
    ctx.filter = 'blur(6px) grayscale(100%) brightness(140%) contrast(90)';
    ctx.drawImage(video, 0, 0); document.querySelector("#mid").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', canvas.toDataURL('image/jpg'));
    ctx.filter = 'blur(4px) grayscale(100%) brightness(190%) contrast(120)';
    ctx.drawImage(video, 0, 0); document.querySelector("#dark").setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', canvas.toDataURL('image/jpg'));
  
    
  }, 200);
  
  function handleSuccess(stream) {
    video.srcObject = stream;
  };
  
  
  
  var takeOnMe = document.getElementById("aha");
  var playing = 1;
  var button = document.getElementById("button");
  function takeMeOn(){
    button.classList.toggle("playing");
    if (playing == 1){
      takeOnMe.play();
      playing = 0;
    }else{
      takeOnMe.pause();
      playing = 1;
    }
  };