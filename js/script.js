// About Image Animation
const aboutImgAnimation = () => {
  const aboutImg = document.querySelector("#aboutSection");

  if (aboutImg) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__fadeInLeft");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(aboutImg);
  }
};

// About Content Animation
const aboutContentAnimationFunction = () => {
  const aboutContent = document.querySelector("#aboutContent");

  if (aboutContent) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__fadeInRight");
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(aboutContent);
  }
};

aboutImgAnimation();
aboutContentAnimationFunction();

// Select the dots container
const dotsContainer = document.querySelector(".dots");

for (let i = 0; i < 8; i++) { 
  const dot = document.createElement("dots");
  dot.classList.add("dot");

  dot.style.top = `${Math.random() * 100}vh`;
  dot.style.left = `${Math.random() * 100}vw`;

  dotsContainer.appendChild(dot);

  moveDot(dot);
}

function moveDot(dot) {
  const randomInterval = Math.random() * 5000 + 3000; 

  setInterval(() => {
    dot.style.top = `${Math.random() * 100}vh`;
    dot.style.left = `${Math.random() * 100}vw`;
  }, randomInterval);
}

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = slider.children;
  const slideCount = slides.length;
  let currentIndex = 0;

  // Clone the first and last slides for a smooth transition
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slideCount - 1].cloneNode(true);

  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slides[0]);

  let slideWidth = slides[0].clientWidth;

  // Set initial position
  slider.style.transform = `translateX(-${slideWidth}px)`;

  // Update slide width on window resize
  window.addEventListener("resize", () => {
    slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
  });

  // Auto-play function
  function autoPlay() {
    currentIndex++;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;

    slider.addEventListener("transitionend", () => {
      if (currentIndex === slideCount) {
        slider.style.transition = "none";
        currentIndex = 0;
        slider.style.transform = `translateX(-${slideWidth}px)`;
      }
    });
  }

  setInterval(autoPlay, 2000);
});
