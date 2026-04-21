let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");
let hireMeBtn = document.getElementById("hireMe");
// elemnt move under the active link
let indicator = document.querySelector(".indicator");
// hero buuttons
let viewWorkBtn = document.getElementById("vwBtn");
let cmBtn = document.getElementById("cmBtn");
// project section
let projectSection = document.getElementById("projects");
let filterButtons = document.querySelectorAll(".btn-filter");
let projectCards = document.querySelectorAll(".project-card");
// contact form inputs
let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputMessage = document.getElementById("message");

// الخط اللي تحت اللينك الاكتف و لما انزل لسكشن بالاسكرول يتاكتف و ان الخط يتحرك ب ترانسيشن
// دي بتربط كل section بالـ link بتاعه
function activateLink(id) {
  navLinks.forEach((link) => {
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

//
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // add nav-active
        activateLink(entry.target.id);
      }
    });
  },
  {
    threshold: 0.65, // يعني السكشن لازم يكون ظاهر 65% عشان يتحسب active
  },
);

// نربط كل section بالـ observer
sections.forEach((section) => {
  observer.observe(section);
});




















//////======///////
// لما اضغط  علي الزرار انزل ل الـ input و اعمل focus عليه
function focusInput() {
  // ينزل لحد الـ input بسلاسة
  inputName.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  // يعمل focus (بعد ما يوصل)
  setTimeout(() => {
    inputName.focus();
  }, 800);
}

hireMeBtn.addEventListener("click", focusInput);
cmBtn.addEventListener("click", focusInput);


// لما اضط اروح لسكشن البروجكت
viewWorkBtn.onclick = () => {
  projectSection.scrollIntoView({
    behavior: "smooth",
  });
};






// =====filter projects button
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let filter = btn.dataset.filter;

      turnoff(); // شيل من الكل
      btn.classList.add("btn-active");
      console.log(filter);

      projectCards.forEach((card) => {
        let category = card.dataset.category;

        if (filter === "all" || category === filter) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });






/********color button*********/
function turnoff() {
  let previousButton = document.querySelector(".btn-active");
  if (previousButton) {
    previousButton.classList.remove("btn-active");
  }
}
