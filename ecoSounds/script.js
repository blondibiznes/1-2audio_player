const play = document.querySelector('.play');
const audio = document.querySelector('.audio');
const list = document.querySelector('.navbar__list');
const listItems = document.querySelectorAll('.list-item');
const mainSection = document.querySelector('.main-section');


function isPlay() {
  const isPlaying = audio.classList.contains('play');
  if(isPlaying){
    stopMusic();
  }else {
    playMusic();
  }

}

play.addEventListener('click',isPlay);
  
function deletClass() {
  listItems.forEach((el) => {
    el.classList.remove('focus');
  })
}
//-------------------------------------------------------
function changeImageAudio(event) {
   const bird = event.target.dataset.bird;
   isPlay = false;
   if(event.target.classList.contains('list-item')) {
      deletClass();
      mainSection.style.backgroundImage = `url(/assets/img/${bird}.jpg)`;
      event.target.classList.add('focus');
      audio.src = `./assets/audio/${bird}.mp3`;
      playMusic();
}
}
list.addEventListener('click', changeImageAudio);

//-------------------------------------


function playMusic() {
  audio.play();
  play.classList.add('active');
  audio.classList.add('play');  
}

function stopMusic() {
  audio.pause();
  play.classList.remove('active');
  audio.classList.remove('play'); 
}
// autoplay
audio.addEventListener('ended',stopMusic);


