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
function isEven() {
  if (Math.random() > 0.9) return true;
  else return false;
};

function callBack(func, time) {
  return new Promise ((resolve,reject) => {
    let currentTimeOffset = 0
    let timerId = setTimeout(function check() {
      if(func(1)) {
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
  });
};

let time = [1000, 5000];

function test(func, callBack, time) {
  time = time || [500, 3000];
  return callBack(func, time)
    .then( () => console.log("успешно"))
    .catch( () => console.log("время ожидания превышено"))
};

test(isEven, callBack, time);

