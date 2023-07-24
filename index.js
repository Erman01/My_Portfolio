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
let sidemenu = document.getElementById("sideMenu");

function openMenu() {
  sidemenu.style.right = "0";
}
function closeMenu() {
  sidemenu.style.right = "-200px";
}

/* --------------Contact form */

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
/*----------------Type writer --------------- */
let i = 0, text;
text= "I'm a Junior Web Developer";

function typing() {
  if (i < text.length) {
    document.getElementById("text-writer").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();
  

   
