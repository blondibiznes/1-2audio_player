const url = 'https://api.icndb.com/jokes/random';
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.img');
const shots = document.querySelectorAll('.shot');

//get data
async function getData() { 
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
  }

  const addClasses = () => {
    img.classList.add('shake-img');
      for(let shot of shots){
        shot.classList.add('active');
      }
  }
  const removeClasses = () => {
    img.classList.remove('shake-img');
        for(let shot of shots){
          shot.classList.remove('active');
        }
  }  

function showData(data) {
    content.innerHTML = data.value.joke;
    addClasses();
    setTimeout(()=>{
      removeClasses();
      
    },1500);
}  

 
btn.addEventListener('click',getData);









