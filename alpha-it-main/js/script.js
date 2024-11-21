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
