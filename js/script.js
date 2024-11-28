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
