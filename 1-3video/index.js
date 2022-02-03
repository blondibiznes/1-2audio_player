const viewer = document.querySelector('.viewer'),
playBtn = document.querySelector('.play-btn'),
playIcon = document.querySelector('.play-icon.play'),
stop = document.querySelector('.stop'),
progressBar = document.querySelector('.progress-bar'),
time = document.querySelector('.time'),
volumeVideo = document.querySelector('.volume');


//play
function toggleVideo() {
  if(viewer.paused) {
    viewer.play();
    playIcon.src = 'assets/svg/pause.svg';
    playBtn.classList.add('active');
  }else {
    viewer.pause();
    playIcon.src = 'assets/svg/play.svg';
    playBtn.classList.remove('active');
  }
}
playIcon.addEventListener('click', toggleVideo);
viewer.addEventListener('click', toggleVideo);
playBtn.addEventListener('click', toggleVideo);


//Stop
function stopVideo() {
  viewer.currentTime = 0;
  viewer.pause();
  playIcon.src = 'assets/svg/play.svg';
}
stop.addEventListener('click',stopVideo);

//Timer
function updateProgress() {
  progressBar.value = (viewer.currentTime / viewer.duration) * 100;

  //minuts
let minutes = Math.floor(viewer.currentTime / 60);
if(minutes < 10){
  minutes = '0' + String(minutes);
}
//seconds
let seconds = Math.floor(viewer.currentTime % 60);
if(seconds < 10){
  seconds = '0' + String(seconds);
}
time.innerHTML = `${minutes}:${seconds}`;
}

viewer.addEventListener('timeupdate',updateProgress);

//setProgress
function setProgress() {
  viewer.currentTime = (progressBar.value * viewer.duration) / 100;
}
progressBar.addEventListener('change', setProgress);
//volume
function videoVolume(){
   let v = this.value;
   viewer.volume = v / 100;
  }
  volumeVideo.addEventListener('input', videoVolume);
 