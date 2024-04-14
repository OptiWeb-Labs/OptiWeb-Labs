const contactBtns = document.querySelectorAll(".contactBtn");
const contactForm = document.getElementById("contactFormDiv");
contactBtns.forEach(contactBtn => {
  contactBtn.addEventListener("click", e => {
    contactForm.scrollIntoView();
    console.log(e.target);
  });
});

const hamMenu = document.querySelector(".hamMenu");
const offScreenMenu = document.getElementById("offScreenUl");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
