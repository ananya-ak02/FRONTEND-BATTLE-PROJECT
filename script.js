// Loader fadeout
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.classList.add('fadeout');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500); 
});


// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Scroll animation
const animateItems = document.querySelectorAll('[data-animate]');
window.addEventListener('scroll', () => {
  animateItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('animate');
    }
  });
});

// Ripple effect logic
document.querySelectorAll('.ripple').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - btn.offsetLeft - diameter / 2}px`;
    circle.style.top = `${e.clientY - btn.offsetTop - diameter / 2}px`;
    circle.classList.add('ripple');
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

// Carousel switch
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const nextBtn = document.querySelector('.carousel-next');
const prevBtn = document.querySelector('.carousel-prev');

function updateCarousel(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel(currentIndex);
});
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel(currentIndex);
});

// Parallax effect
document.addEventListener('scroll', () => {
  const parallax = document.querySelector('.parallax');
  if (parallax) {
    const offset = window.pageYOffset;
    parallax.style.backgroundPositionY = `${offset * 0.5}px`;
  }
});
