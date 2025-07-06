// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// mobileMenuButton.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden');
// });

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('#mobile-menu') && !event.target.closest('#mobile-menu-button')) {
        mobileMenu.classList.add('hidden');
    }
});

// Close menu on resize to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
    }
});


let currentSlide = 0;
const slides = document.querySelectorAll('#carousel img');
const totalSlides = slides.length;

function updateSlide() {
    document.getElementById('carousel').style.transform =
        `translateX(-${currentSlide * 100}%)`;

    document.querySelectorAll('.absolute.bottom-4 div').forEach((dot, index) => {
        dot.style.backgroundColor = index === currentSlide ? 'white' : 'rgba(255,255,255,0.3)';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlide();
}
setInterval(nextSlide, 5000);
updateSlide();


// Animate Achievements Card

// Intersection Observer for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const statsCards = document.querySelectorAll('.stats-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });

    statsCards.forEach(card => {
        observer.observe(card);
    });

    // Number counting animation
    document.querySelectorAll('.count-up').forEach(element => {
        const target = parseInt(element.innerText);
        let count = 0;
        const interval = setInterval(() => {
            if (count >= target) {
                clearInterval(interval);
                return;
            }
            count += Math.ceil(target/50);
            element.innerText = count + "+";
        }, 50);
    });
});


//Slick slider
$(document).ready(function(){
    $('.slider-center').slick({
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3,
      infinite: true,
      responsive: [
        {
          breakpoint: 768, // tablets
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480, // mobile
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1
          }
        }
      ]
    });
  });
