// Optional: Add dropdown hover effect for desktop
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('mouseenter', function () {
    if (window.innerWidth >= 992) {
      this.classList.add('show');
      this.querySelector('.dropdown-menu').classList.add('show');
    }
  });

  dropdown.addEventListener('mouseleave', function () {
    if (window.innerWidth >= 992) {
      this.classList.remove('show');
      this.querySelector('.dropdown-menu').classList.remove('show');
    }
  });
});
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.main-navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// counter animation

const counters = document.querySelectorAll('.counter');
let hasCounted = false;

const startCounter = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    if (!target) return;

    const speed = 50;
    let count = 0;

    const updateCount = () => {
      const increment = Math.ceil(target / speed);
      if (count < target) {
        count += increment;
        counter.innerText = count;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + (target === 100 ? 'k+' : '%');
      }
    };

    updateCount();
  });
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasCounted) {
      startCounter();
      hasCounted = true;
    }
  });
}, {
  threshold: 0.5
});

observer.observe(document.getElementById('counter-section'));

