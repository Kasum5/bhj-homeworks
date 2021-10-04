const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const sliderItems = document.querySelectorAll('.slider__item');

let activeSlideIndex = 0

function sliders() {
  let arr = Array.from(sliderItems);
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.toggle('slider__item_active');
    activeSlideIndex++;
    activeSlideIndex--;
  }
}

arrowPrev.addEventListener('click', sliders);
arrowNext.addEventListener('click', sliders);