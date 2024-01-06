const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timestamp');


function playPause() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
  }
  
  function updateIcon() {
    if (video.paused) {
      play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
      play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
  }

video.addEventListener('click', playPause);
video.addEventListener('play', updateIcon);
video.addEventListener('click', updateIcon);

play.addEventListener('click', playPause);
stop.addEventListener('click', stopVideo);