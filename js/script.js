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

// swiper js func

new Swiper(".card-wrapper", {
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1524: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

document.getElementById('all').style.display = "block";
evt.currentTarget.className += " active";
// tabs script
function openCity(evt, categoryName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(categoryName).style.display = "block";
  evt.currentTarget.className += " active";
}