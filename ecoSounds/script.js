const play = document.querySelector('.play');
const audio = document.querySelector('.audio');
const solovey = document.querySelector('.solovey');
const drozd = document.querySelector('.drozd');
const malinovka = document.querySelector('.malinovka');
const javoronok= document.querySelector('.javoronok');
const slavka = document.querySelector('.slavka');
const listItems = document.querySelectorAll('.list-item');
const mainSection = document.querySelector('.main-section');
let index = 0;

function isPlay() {
  const isPlaying = audio.classList.contains('play');
  if(isPlaying){
    stopMusic();
  }else {
    playMusic();
  }

}

play.addEventListener('click',() => {
  isPlay()});
  
function deletClass() {
  listItems.forEach((el) => {
    el.classList.remove('focus');
  })
}
//-------------------------------------------------------

solovey.addEventListener('click',() => {
  deletClass();
  audio.src = "./assets/audio/solovey.mp3";
  listItems[0].classList.add('focus');
  mainSection.style.backgroundImage = "url('./assets/img/solovey.jpg')";
  playMusic();

})
drozd.addEventListener('click',() => {
  deletClass();
  audio.src = "./assets/audio/drozd.mp3";
  listItems[1].classList.add('focus');
  mainSection.style.backgroundImage = "url('./assets/img/drozd.jpg')";
  playMusic();
  
})
malinovka.addEventListener('click',() => {
  deletClass();
  audio.src = "./assets/audio/malinovka.mp3";
  listItems[2].classList.add('focus');
  mainSection.style.backgroundImage = "url('./assets/img/malinovka.jpg')";
  playMusic();
})
javoronok.addEventListener('click',() => {
  deletClass();
  audio.src = "./assets/audio/javoronok.mp3";
  listItems[3].classList.add('focus');
  mainSection.style.backgroundImage = "url('./assets/img/javoronok.jpg')";
  playMusic()
})
slavka.addEventListener('click',() => {
  deletClass();
  audio.src = "./assets/audio/slavka.mp3";
  listItems[4].classList.add('focus');
  mainSection.style.backgroundImage = "url('./assets/img/slavka.jpg')";
  playMusic();
})
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


