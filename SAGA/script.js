let currentIndex = 0;
const slides = document.querySelectorAll('.slider .slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function moveSlide(direction) {
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(() => moveSlide(1), 5000);
