// Задание 2
let hiden = document.querySelectorAll(".hiden");
let active = document.querySelectorAll(".active-list");
let overflow = document.querySelectorAll(".overflow");

for (let i = 0; i < hiden.length; i++) {
  active[i].onclick = () => {
    active[i].classList.toggle("active-list_open");
    hiden[i].classList.toggle("visible");
    overflow[i].classList.toggle("overflow-active");
  };
};

// Задание 6
function isTrue() {
  return Math.random() > 0.9;
};

function checkFunc() {
  console.log("Успешно");
};

let time = [1000, 5000];

function timerFunc(func, checkFunc, time) {
  time = time || [500, 3000];
  return new Promise ((resolve,reject) => {
    let currentTimeOffset = 0
    let timerId = setTimeout(function check() {
      if(func()) {
        resolve();
        clearTimeout(timerId);
      }
      else {
        currentTimeOffset += time[0];
        console.log(currentTimeOffset);

        if (currentTimeOffset >= time[1]) {
          reject();
          clearTimeout(timerId);
        }
        else {
          clearTimeout(timerId);
          timerId = setInterval(check, time[0]);
        }
      };
    }, time[0]);    
  })
    .then( () => checkFunc() )
    .catch( () => console.log("время ожидания превышено") )      
};

timerFunc(isTrue, checkFunc, time);
