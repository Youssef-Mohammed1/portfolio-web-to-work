//== elaments

/***  header ***/
let navLinks = document.querySelectorAll("nav ul li a");
let hireMeBtn = document.getElementById("hireMe");
//- elemnt move under the active link in header */
let indicator = document.querySelector(".indicator");

/*** sections ***/
let sections = document.querySelectorAll("section");
/*** hero section ***/
//- hero buuttons
let viewWorkBtn = document.getElementById("vwBtn");
let cmBtn = document.getElementById("cmBtn");

/*** Project section ***/
//- project section
let projectSection = document.getElementById("projects");
//- project button filter
let filterButtons = document.querySelectorAll(".btn-filter");
//- project card
let projectCards = document.querySelectorAll(".project-card");

/*** contact section ***/
//- contact inputs
let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputMessage = document.getElementById("message");
let sendMessageBtn = document.getElementById('sendMessage');
//------------------------------------//

//= F add nav-active
function activateLink(id){
    navLinks.forEach((link) =>{

        link.classList.remove("nav-active");

        if(link.getAttribute("href") === `#${id}`){
            link.classList.add("nav-active")
            // move line under nav-active
            moveIndicator(link)
        }
});
}

//= F line under active link
function moveIndicator(el){
    indicator.style.width = el.offsetWidth +"px"; 
    indicator.style.left = el.offsetLeft +"px"; 
}
//= navbar active link updates on scroll
let observer = new IntersectionObserver(
    (entries) => {
       entries.forEach((entry) => {
        // if show section
        if(entry.isIntersecting){
            //add nav-active
            activateLink(entry.target.id)
        }
       }); 
    },
    {
        threshold: 0.65,
    },
);
// look to sections without this don't work
sections.forEach((section) =>{
  observer.observe(section);
});

//= F Hire me and contact me buttons
function focusInput(){
    //scroll to input
    inputName.scrollIntoView({
        behavior: "smooth",
        block: "center",
    });
    // focus in input after 8s
    setTimeout(()=>{
        inputName.focus();
    },800);
}
// add function to buttons
hireMeBtn.addEventListener("click",focusInput);
cmBtn.addEventListener("click",focusInput);

//= F view work button
viewWorkBtn.onclick = () => {
projectSection.scrollIntoView({
    behavior: "smooth",
});
};

//= F projects buttons filter
// web loud
    filterButtons.forEach((btn) =>{
      btn.addEventListener("click",() => {
        let filter = btn.dataset.filter;
        turnOff();
        btn.classList.add("btn-active");

        projectCards.forEach((card)=>{
        
            let category = card.dataset.category;
            if(filter === 'all'||category === filter){
                card.classList.remove("hide");
            }else{
                card.classList.add("hide");
            }
      });
    });  
  });

//= F btn-active
function turnOff(){
    let perviousButton = document.querySelector('.btn-active');
    if(perviousButton){
        perviousButton.classList.remove("btn-active");
    }
}