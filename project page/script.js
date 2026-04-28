//== elaments

/***  header ***/
let navLinks = document.querySelectorAll("nav ul li a");
let hireMeBtn = document.getElementById("hireMe");
let menuToggle = document.getElementById("menuToggle");
let navMenu = document.querySelector("header nav ul");
//- elemnt move under the active link in header */
let indicator = document.querySelector(".indicator");

/*** sections ***/
let sections = document.querySelectorAll("section");
/* contact button*/
let cmBtn = document.getElementById("cmBtn");
/* top arrow*/
let topArrow = document.getElementById("topArrow");

//= F add nav-active
function activateLink(id) {
  navLinks.forEach((link) => {
    link.classList.remove("head-active");

    if (link.getAttribute("href") === `#${id}`) {
      link.classList.add("head-active");
      // move line under nav-active
      moveIndicator(link);
    }
  });
}
//= F line under active link
function moveIndicator(el) {
  indicator.style.width = el.offsetWidth + "px";
  indicator.style.left = el.offsetLeft + "px";
}
//= navbar active link updates on scroll
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // if show section
      if (entry.isIntersecting) {
        //add nav-active
        activateLink(entry.target.id);
      }
    });
  },
  {
    threshold: 0.3,
  },
);
// look to sections without this don't work
sections.forEach((section) => {
  observer.observe(section);
});

function goToHome() {
  window.location.href = "../../index.html#projects";
}

function goToContact() {
  window.location.href = "../../index.html#contact";
}

hireMeBtn.addEventListener("click", goToHome);
cmBtn.addEventListener("click", goToContact);

//go to top
topArrow.onclick = function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

/******burger button******/
menuToggle.addEventListener("click",() =>{
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("open");


});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});
