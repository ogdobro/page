const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const prevButton = slider.querySelector('.prev');
const nextButton = slider.querySelector('.next');

let currentSlide = 0;
const slideWidth = slides.firstElementChild.clientWidth;

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.children.length - 1;
  }
  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.children.length) {
    currentSlide = 0;
  }
  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});
