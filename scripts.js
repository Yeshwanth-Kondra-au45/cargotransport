const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".container-items")
const navApplication = document.querySelector('.nav-item-btn')
const counter = document.querySelector('.counter');
let maxValue =  parseFloat(counter.textContent);
const content = document.querySelector('.mobile-counter');
const contentPosition = content.getBoundingClientRect().top + window.scrollY

const carouselSlides = document.querySelectorAll('.image');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let index = 0;

let videoPlayer = document.getElementById("video-player");
let modal = document.getElementById("video-modal");

function closeModal() {
  modal.style.display = "none";
  videoPlayer.src = "";
}

function openModal() {
  modal.style.display = "block";
  videoPlayer.src = "https://www.youtube.com/embed/t-bHrnLfYQ0?autoplay=1&mute=1";
}


function showSlide(n) {
  carouselSlides.forEach(slide => slide.classList.remove('showImage'));
  carouselSlides[n].classList.add('showImage');
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = carouselSlides.length - 1;
  }
  showSlide(index);
}

function nextSlide() {
  index++;
  if (index >= carouselSlides.length) {
    index = 0;
  }
  showSlide(index);
}

prevBtn.addEventListener('click', (event) => {
  event.preventDefault();
  prevSlide();
});
nextBtn.addEventListener('click', (event) => {
  event.preventDefault();
  nextSlide();
});

carouselSlides.forEach((image, i) => {
  image.addEventListener('click', () => {
    index = i;
    showImage(index);
  });
  });

hamburger.addEventListener('click',()=>{
     hamburger.classList.toggle("active")
     navList.classList.toggle('isDisplay')
})

window.addEventListener('scroll', () => {
  if (window.scrollY >= contentPosition) {
    const percentScrolled = Math.floor(((window.scrollY - contentPosition) / (content.offsetHeight - window.innerHeight)) * 100);
    const currentValue = Math.floor((percentScrolled / 100) * maxValue);
    animateCounter(counter, currentValue, 500);
  }
});

function animateCounter(counter, newValue, duration) {
let startValue = parseFloat(counter.textContent);
  let startTime = null;
  function step(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const elapsedTime = timestamp - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const value = Math.floor(startValue + (newValue - startValue) * progress);
    numberofProjects = Math.abs(value + 50);
    counter.textContent = Math.max(numberofProjects, numberofProjects + 175)
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}