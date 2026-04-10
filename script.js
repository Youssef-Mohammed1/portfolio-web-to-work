let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");
let indicator = document.querySelector(".indicator");

let hireMeBtn = document.getElementById("hireMe");
let cmBtn = document.getElementById("cmBtn");

let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputMessage = document.getElementById("message");

// دي بتربط كل section بالـ link بتاعه
function activateLink(id) {
  navLinks.forEach(link => {
    link.classList.remove("nav-active");

    if (link.getAttribute("href") === `#${id}`) {
      link.classList.add("nav-active");

      // تحريك الـ indicator
      moveIndicator(link);
    }
  });
}

// نفس فكرة اللي عملناها قبل كده
function moveIndicator(el) {
  indicator.style.width = el.offsetWidth + "px";
  indicator.style.left = el.offsetLeft + "px";
}

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activateLink(entry.target.id);
      }
    });
  },
  {
    threshold: 0.65 // يعني السكشن لازم يكون ظاهر 60% عشان يتحسب active
  }
);

// نربط كل section بالـ observer
sections.forEach(section => {
  observer.observe(section);
});

//////======///////
function focusInput() {
  // ينزل لحد الـ input بسلاسة
  inputName.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  // يعمل focus (بعد ما يوصل)
  setTimeout(() => {
    inputName.focus();
  }, 800);
}
hireMeBtn.addEventListener("click", focusInput);
cmBtn.addEventListener("click", focusInput);

