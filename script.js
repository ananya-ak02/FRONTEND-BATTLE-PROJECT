// Loader fadeout
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('fadeout');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Optional: Change icon based on theme
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
}

// Scroll animation
const animateItems = document.querySelectorAll('[data-animate]');
const handleScrollAnimations = () => {
  animateItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('animate');
    }
  });
};
window.addEventListener('scroll', handleScrollAnimations);
handleScrollAnimations(); // Trigger once on load in case items are already in view

// Ripple effect logic
document.querySelectorAll('.ripple').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.offsetX - radius}px`;
    circle.style.top = `${e.offsetY - radius}px`;
    circle.classList.add('ripple-animation');

    // Remove existing ripples
    btn.querySelectorAll('.ripple-animation').forEach(el => el.remove());

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

if (nextBtn && prevBtn && items.length > 0) {
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel(currentIndex);
  });

  updateCarousel(currentIndex); // Ensure it's updated on load
}

// Parallax effect
const parallax = document.querySelector('.parallax');
if (parallax) {
  document.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    parallax.style.backgroundPositionY = `${offset * 0.5}px`;
  });
}
