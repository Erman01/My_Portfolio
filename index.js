//About page skills, experience, education 
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}
//End of About page skills, experience, education

// Mobile menu open&close
let sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "0";
}

/* --------------Contact form */

// function sendMail() {
//   var tempParams = {
//     name: document.getElementById("name").value,
//      email: document.getElementById("email").value,
//     subject: document.getElementById("subject").value,
//     message: document.getElementById("message").value
//   };
//   const serviceID = "service_d3ekv9c";
//   const templateID = "template_x58txm5";
//   emailjs.send(serviceID, templateID, tempParams).then((res) => {
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("subject").value = "";
//       document.getElementById("message").value = "";
//       alert("your message sent");
//     }).catch((err) => console.log(err));
//   }
const contactForm = document.querySelector("#contact-form");
const submitButton = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
// const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

const publicKey = "0UruFJZGzE6WDIGRJ";
const serviceID = "service_d3ekv9c";
const templateID = "template_x58txm5";

emailjs.init(publicKey);
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  submitButton.innerText = "Just A Moment...";
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    // subject: subjectInput.value,
    message:messageInput.value
  }
  emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      submitButton.innerHTML = "Message Sent Successfully";
      nameInput.value = "";
      emailInput.value = "";
      // subjectInput.value = "";
      messageInput.value = "";
     
    }, (error) => {
      console.log(error);
      submitButton.innerText="Something went wrong"
    })
  
})
/* -----------End of Contact Form-------------- */
  
/* Scroll Effect */

    // Get the current page scroll position
   
