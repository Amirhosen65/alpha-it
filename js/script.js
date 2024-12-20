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