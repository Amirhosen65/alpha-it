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

  document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".service-item");

    const revealOnScroll = () => {
      serviceItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          item.style.opacity = "1"; 
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
  });


document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".portfolio-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 } 
  );

  items.forEach((item) => observer.observe(item));
});


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
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev">❮</button>',
    nextArrow:
      '<button type="button" class="slick-next">❯</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const serviceItems = document.querySelectorAll(".service-item-wrapper");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  serviceItems.forEach((item) => {
    observer.observe(item);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); 
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.2, 
    }
  );

  portfolioItems.forEach((item) => observer.observe(item));
});
