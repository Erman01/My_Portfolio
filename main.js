class Animator {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }
  fadeOut() {
    this.selector.style.opacity = 0;
    this.selector.style.transition = "all 0,7s ease 1s";
  }
  fadeIn() {
    this.selector.style.opacity = 10;
    this.selector.style.transition = "all 1s ease 0.7s";
    this.selector.style.position = "absolute";
  }
}

const home = new Animator(".home-section");
const about = new Animator(".about-section");
const projects = new Animator(".projects-section");
const experience = new Animator(".experience-section");
const education = new Animator(".education-section");
const skills = new Animator(".skills-section");

// let i = 0;
// let txt = "Lorem ipsum typing effect!"; /* The text */
// let speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     home.innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

const homeElement = document.getElementById("home");
homeElement.addEventListener("click", () => {
  about.fadeOut();
  projects.fadeOut();
  experience.fadeOut();
  education.fadeOut();
  skills.fadeOut();
  // home.style.transition = "all 0.5s ease-out 0.5s";
  home.fadeIn();
});

const aboutElement = document.getElementById("about");
aboutElement.addEventListener("click", () => {
  home.fadeOut();
  projects.fadeOut();
  experience.fadeOut();
  education.fadeOut();
  skills.fadeOut();
  //   about.style.transition = "all 0.5s ease-out 0.5s";
  about.fadeIn();
});

const projectsElement = document.getElementById("projects");
projectsElement.addEventListener("click", () => {
  about.fadeOut();
  home.fadeOut();
  experience.fadeOut();
  education.fadeOut();
  skills.fadeOut();
  projects.fadeIn();
});
const experienceElement = document.getElementById("experience");
experienceElement.addEventListener("click", () => {
  about.fadeOut();
  home.fadeOut();
  education.fadeOut();
  skills.fadeOut();
  projects.fadeOut();
  experience.fadeIn();
});
const educationElement = document.getElementById("education");
educationElement.addEventListener("click", () => {
  about.fadeOut();
  home.fadeOut();
  skills.fadeOut();
  projects.fadeOut();
  experience.fadeOut();

  education.fadeIn();
});
const skillsElement = document.getElementById("skills");
skillsElement.addEventListener("click", () => {
  about.fadeOut();
  home.fadeOut();
  projects.fadeOut();
  experience.fadeOut();
  education.fadeOut();

  skills.fadeIn();
});
let i = 0;
let text = "Welcome!";
let homeTitle = document.getElementById("home");
function typeText() {
  if (i < text.length) {
    document.getElementById("textWriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 100);
    homeTitle.style.display = "none";
  }
}
typeText();
