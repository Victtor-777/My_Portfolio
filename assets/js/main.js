/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToogle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToogle) {
  navToogle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
// let swiperPortfolio = new Swiper(".portfolio__container", {
//   cssMode: true,
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEL: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   mousewheel: true,
//   keyboard: true,
// });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  mousewheel: true,
  keyboard: true,

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag;
  if (this.scrollY >= 100) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the scroll class to the tag with the scroll
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validade if the user previously chose a topic
if (selectedTheme) {
  // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually whit the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== ScrollReveal Animations ====================*/
// Scroll reveal animations

// Common reveal options to create reveal animations
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 2500,
  delay: 100,
  viewOffset: {
    top: 0,
    right: 0,
    bottom: 220,
    left: 0,
  },
});

// Target elements, and specify options to create reveal animations

// Home Animations
ScrollReveal().reveal(".home__title", { delay: 300, origin: "left" });
ScrollReveal().reveal(".home__img", { delay: 500, origin: "right" });
ScrollReveal().reveal(".home__social i", {
  delay: 600,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".home__subtitle", { delay: 500, origin: "left" });
ScrollReveal().reveal(".home__description", { delay: 550, origin: "right" });
ScrollReveal().reveal(".home__data .button", { delay: 600, origin: "bottom" });
ScrollReveal().reveal(".home__scroll", { delay: 600, origin: "bottom" });

// About Me
ScrollReveal().reveal("#about .section__subtitle", {
  delay: 300,
  origin: "top",
});
ScrollReveal().reveal(".about__description", { delay: 350, origin: "right" });
ScrollReveal().reveal(".about__img", { delay: 350, origin: "left" });
ScrollReveal().reveal(".about__info div", {
  delay: 400,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".about__buttons", { delay: 450, origin: "bottom" });

// Skilss
ScrollReveal().reveal("#skills .section__subtitle", {
  delay: 300,
  origin: "top",
});
ScrollReveal().reveal(".skills__container .skills__content", {
  delay: 300,
  origin: "left",
  interval: 400,
});

// Qualification
ScrollReveal().reveal(".qualification  .section__subtitle", {
  delay: 300,
  origin: "top",
});
ScrollReveal().reveal(".qualification__container", {
  delay: 400,
  origin: "top",
});

// Portfolio
ScrollReveal().reveal("#portfolio  .section__subtitle", {
  delay: 300,
  origin: "top",
});
ScrollReveal().reveal(".portfolio__container .portfolio__item", {
  delay: 400,
  origin: "left",
  interval: 200,
});

// Contact
ScrollReveal().reveal("#contact  .section__subtitle", {
  delay: 300,
  origin: "top",
});
ScrollReveal().reveal(".contact__form", { delay: 450, origin: "right" });
ScrollReveal().reveal(".contact__informations .contact__information", {
  delay: 450,
  origin: "left",
  interval: 250,
});
