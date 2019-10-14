const presentation = document.querySelector(".presentation");
const dot = document.querySelectorAll(".presentation__slider-dot");
const nav = document.querySelectorAll(".presentation__nav");
let currentPos = 1;
const lastPos = 4;

function setBackground(currentPos) {
  if (currentPos%2 === 0) {
    presentation.classList.add("presentation_2");
  }
  else {
    presentation.classList.remove("presentation_2");
  };
};

function opacityDot() {
  for (let i = 0; i < dot.length; i++) {
    if (i+1 === currentPos) {
      dot[i].classList.add("presentation__slider-dot_active")
    }
    else {
      dot[i].classList.remove("presentation__slider-dot_active")
    };
  };
};

function opacityNav() {
  if (currentPos === 1) {
    nav[0].classList.add("presentation__nav_inactive");
    nav[1].classList.remove("presentation__nav_inactive");
  }
  else if (currentPos === lastPos) {
    nav[0].classList.remove("presentation__nav_inactive");
    nav[1].classList.add("presentation__nav_inactive");
  }
  else {
    nav[0].classList.remove("presentation__nav_inactive");
    nav[1].classList.remove("presentation__nav_inactive");
  };
};

function nextSlide() {
  nav[1].addEventListener("click", function() {
    if (currentPos === 4) {
      return
    }
    else {
      currentPos += 1;
      opacityNav();
      opacityDot();
      setBackground(currentPos);
    };
  });
};

function previousSlide() {
  nav[0].addEventListener("click", () => {
    if (currentPos === 1) {
      return
    }
    else {
      currentPos -= 1;
      opacityNav();
      opacityDot();
      setBackground(currentPos);
    };
  });
};

function dotsNav() {
  for(let i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", () => {
      currentPos = i+1;
      opacityNav();
      opacityDot();
      setBackground(currentPos)
    });
  };
};

(function firstSliderStart() {
  opacityDot();
  opacityNav();
  nextSlide();
  previousSlide();
  dotsNav();
})();

///second slider

const reviewDot = document.querySelectorAll(".reviews__slider-dot");
const reviewLeftNav = document.querySelector(".reviews__slider-nav-left");
const reviewRightNav = document.querySelector(".reviews__slider-nav-right");
const slides = document.querySelector(".reviews__slides");
let reviewCurrentPos = 0;
const reviewLastPos = 3;
const scrollwidth = document.querySelector(".reviews__slide-box").scrollWidth;


function setPos() {
  pos = -scrollwidth*reviewCurrentPos + "px";
  slides.style = `transform: translateX(${pos})`;
}

function reviewDotOpacity() {
  for (let i = 0; i < reviewDot.length; i++) {
    if (i === reviewCurrentPos) {
      reviewDot[i].classList.add("reviews__slider-dot_active")
    }
    else {
      reviewDot[i].classList.remove("reviews__slider-dot_active")
    };
  };
};

function reviewNavOpacity() {
  if (reviewCurrentPos === 0) {
    reviewLeftNav.classList.add("reviews__slider-nav_inactive");
    reviewRightNav.classList.remove("reviews__slider-nav_inactive");
  }
  else if (reviewCurrentPos === reviewLastPos) {
    reviewLeftNav.classList.remove("reviews__slider-nav_inactive");
    reviewRightNav.classList.add("reviews__slider-nav_inactive");
  }
  else {
    reviewLeftNav.classList.remove("reviews__slider-nav_inactive");
    reviewRightNav.classList.remove("reviews__slider-nav_inactive");
  };
};

function reviewNextSlide() {
  reviewRightNav.addEventListener("click", function() {
    if (reviewCurrentPos === reviewLastPos) return
    else {
      reviewCurrentPos += 1;
      reviewDotOpacity(); 
      reviewNavOpacity();           
      setPos();
    };
  });
};

function reviewPreviousSlide() {
  reviewLeftNav.addEventListener("click", function() {
    if (reviewCurrentPos === 0) return
    else {
      reviewCurrentPos -= 1;
      reviewNavOpacity();
      reviewDotOpacity();
      setPos();
    };
  });
};

function reviewDotsNav() {
  for(let i = 0; i < reviewDot.length; i++) {
    reviewDot[i].addEventListener("click", () => {
      reviewCurrentPos = i;      
      reviewDotOpacity();
      reviewNavOpacity();
      setPos();
    });
  };
};

(function reviewSliderStart() {
  reviewDotOpacity();
  reviewNavOpacity();
  reviewNextSlide();
  reviewPreviousSlide();
  reviewDotsNav();
  setPos();
})();
