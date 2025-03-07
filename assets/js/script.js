'use strict';
// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
// modal toggle function
// add click event to modal close button
// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}
// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
// resume button
document.getElementById('downloadResumeBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
  
    // Path to your resume file
    const fileUrl = './assets/adityaResume.pdf';
  
    // Desired filename for the downloaded file
    const fileName = 'Aditya_Bhosale_Resume.pdf';
  
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
  
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    // Show download confirmation message
    const confirmation = document.getElementById('downloadConfirmation');
    confirmation.style.display = 'block';
    confirmation.classList.add('show');
  
    // Hide the confirmation message after 3 seconds
    setTimeout(function() {
      confirmation.classList.remove('show');
      setTimeout(function() {
        confirmation.style.display = 'none';
      }, 300); // Wait for the fade-out transition to complete
    }, 3000);
  });