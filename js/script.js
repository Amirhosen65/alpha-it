const aboutImgAnimation = () => {
  const aboutImg = document.querySelector("#aboutSection");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the animation class when the section comes into view
          entry.target.classList.add("animate__fadeInLeft");
          // Optionally, you can remove the observer once the animation has been triggered
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // Trigger animation when at least 50% of the section is in view
    }
  );

  // Start observing the target section
  observer.observe(aboutImg);
};
aboutImgAnimation();

const aboutContentAnimationFuntion = () => {
  const aboutContent = document.querySelector("#aboutContent");

  // Create an IntersectionObserver
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the animation class when the section is in view
          entry.target.classList.add("animate__fadeInRight");
          entry.target.style.opacity = 1; // Optional: you can make it fade in smoothly
          observer.unobserve(entry.target); // Optionally stop observing after the animation
        }
      });
    },
    {
      threshold: 0.5, // Trigger when at least 50% of the section is visible
    }
  );

  // Start observing the aboutContent section
  observer.observe(aboutContent);
};
aboutContentAnimationFuntion();

// Get DOM elements
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slider img');

// Variables
let currentIndex = 0;
const itemsPerScreen = 3; // Number of logos visible at a time
const slideWidth = slides[0].clientWidth + 20; // Width + margin
const totalSlides = slides.length;

// Set initial slider position
slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

// Update slider position
function updateSlider() {
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Move one logo to the left
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    updateSlider();
  }
});

// Move one logo to the right
nextBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - itemsPerScreen) {
    currentIndex += 1;
    updateSlider();
  }
});

// Clickable dotss
slides.forEach((img, index) => {
  img.addEventListener('click', () => {
    alert(`Clicked on Image ${index + 1}`);
  });
});

const dotsContainer = document.querySelector('.dots');

for (let i = 0; i < 10; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  
  dot.style.top = `${Math.random() * 100}vh`;
  dot.style.left = `${Math.random() * 100}vw`;
  dot.style.animationDelay = `${Math.random() * 5}s`;
  dot.style.animationDuration = `${5 + Math.random() * 5}s`;
  
  dotsContainer.appendChild(dot);
}
