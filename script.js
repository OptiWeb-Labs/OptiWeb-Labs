const contactBtns = document.querySelectorAll(".contactBtn");
const contactForm = document.getElementById("contactFormDiv");
contactBtns.forEach(contactBtn => {
  contactBtn.addEventListener("click", e => {
    contactForm.scrollIntoView();
    console.log(e.target);
  });
});

const hamMenu = document.querySelector(".hamMenu");
const offScreenUl = document.getElementById("offScreenUl");
const offScreenMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  offScreenUl.classList.toggle("active");
});
