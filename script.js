const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timestamp');


function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause;
    }
}


video.addEventListener('click', playPause);
play.addEventListener('click', playPause);