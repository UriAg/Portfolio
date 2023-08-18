//Nav observer
const sections = document.querySelectorAll('.ObserverSection');
const navList = document.querySelectorAll('.menu .menu-list li');
let observer = new IntersectionObserver((entries)=>{
    entries.forEach((e)=>{
       
        if (e.isIntersecting) {
            const targetSectionId = e.target.getAttribute('id');
            navList.forEach((navItem) => {
              if (navItem.getAttribute('data-nav') === targetSectionId) {
                navItem.classList.add('active');
              } else {
                navItem.classList.remove('active');
              }
            });
          }

    });
}, {
    rootMargin: "-70px 0px 0px 0px",
    threshold: 0.6
});

window.onload = function(){
    sections.forEach((section)=>{
        observer.observe(section);
    })
}

//Change lenguage

//Nav links
const NavSections = document.querySelectorAll(".nav-section");
let NavSectionsArray = [];
NavSections.forEach((link)=>{
  NavSectionsArray.push(link);
});

//Soft skills items
const SoftSkillsItems = document.querySelectorAll(".soft-skills-item");
let SoftSkillsArray = [];
SoftSkillsItems.forEach((skill)=>{
  SoftSkillsArray.push(skill);
});

//Titles
const BrandTitle = document.querySelector(".brand-title");
const AboutTitle = document.querySelector(".about-title");
const ProjectsTitle = document.querySelector(".projects-title");
const SkillsTitle = document.querySelector(".skills-title");
const HardSkillsTitle = document.querySelector(".hard-skills-title");
const SoftSkillsTitle = document.querySelector(".soft-skills-title");
const ContactTitle = document.querySelector(".contact-title");

//Projects text
const ReactProjectText = document.querySelector(".reactjs-text");
const DwProjectText = document.querySelector(".dw-text");
const PhpProjectText = document.querySelector(".php-text");
const JsProjectText = document.querySelector(".js-text");
//Projects title
const ReactProjectTitle = document.querySelector(".reactjs-title");
const DwProjectTitle = document.querySelector(".dw-title");
const PhpProjectTitle = document.querySelector(".php-title");
const JsProjectTitle = document.querySelector(".js-title");

//About text
const AboutText = document.querySelector(".about-text");

//Form translate
const NameLabel = document.querySelector(".name-label");
const EmailLabel = document.querySelector(".email-label");
const MessageLabel = document.querySelector(".message-label");
const SendFormButton = document.querySelector(".send-form-button");

//CV button
const CvButtons = document.querySelectorAll('.resume-button');
let CvButtonsArray = [];
CvButtons.forEach((button)=>{
  CvButtonsArray.push(button);
});

let lenguages;
fetch('../lenguages.json')
  .then(response => response.json())
  .then(data => {
    lenguages = data[0];
    if(localStorage.getItem('lenguage')){
      changeLenguage(localStorage.getItem('lenguage'));
      if(localStorage.getItem('lenguage') === "spanish"){
        LenguageCheckbox.forEach(check=>{
          check.checked = true;
        });
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
function changeLenguage(lenguageSelected){
  localStorage.setItem('lenguage', lenguageSelected);

  //Translate titles
  BrandTitle.innerHTML = lenguages[lenguageSelected].brandSection.title;
  AboutTitle.innerHTML = lenguages[lenguageSelected].aboutSection.title;
  ProjectsTitle.innerHTML = lenguages[lenguageSelected].projectsSection.title;
  SkillsTitle.innerHTML = lenguages[lenguageSelected].skillsSection.title;
  HardSkillsTitle.innerHTML = lenguages[lenguageSelected].skillsSection.skills.hardSkills.title;
  SoftSkillsTitle.innerHTML = lenguages[lenguageSelected].skillsSection.skills.softSkills.title;
  ContactTitle.innerHTML = lenguages[lenguageSelected].contactSection.title;
  
  //Translate project titles
  ReactProjectTitle.innerHTML = lenguages[lenguageSelected].projectsSection.projectsText.RJS.title;
  DwProjectTitle.innerHTML = lenguages[lenguageSelected].projectsSection.projectsText.DW.title;
  PhpProjectTitle.innerHTML = lenguages[lenguageSelected].projectsSection.projectsText.PHP.title;
  JsProjectTitle.innerHTML = lenguages[lenguageSelected].projectsSection.projectsText.JS.title;

  //Translate project texts and about text
  ReactProjectText.innerHTML = lenguages[lenguageSelected].projectsSection.projectsText.RJS.text;
  DwProjectText.innerHTML = lenguages[lenguageSelected].projectsSection.projectsText.DW.text;
  PhpProjectText.innerHTML = lenguages[lenguageSelected].projectsSection.projectsText.PHP.text;
  JsProjectText.innerHTML = lenguages[lenguageSelected].projectsSection.projectsText.JS.text;
  AboutText.innerHTML = lenguages[lenguageSelected].aboutSection.text;
  
  //Translate nav links
  for (let i = 0; i < NavSectionsArray.length; i++) {
    NavSectionsArray[i].innerHTML = lenguages[lenguageSelected].navLinks[i];
  }
  
  //Translate soft skills
  for (let i = 0; i < SoftSkillsArray.length; i++) {
    SoftSkillsArray[i].innerHTML = lenguages[lenguageSelected].skillsSection.skills.softSkills.softSkillsItems[i];
  }

  //Change resume button settings
  for (let i = 0; i < CvButtonsArray.length; i++) {
    CvButtonsArray[i].innerHTML = lenguages[lenguageSelected].brandSection.button.text;
    CvButtonsArray[i].href = lenguages[lenguageSelected].brandSection.button.resumePath;
    CvButtonsArray[i].download = lenguages[lenguageSelected].brandSection.button.resumePath;
  }
  
  //Translate form
  NameLabel.innerHTML = lenguages[lenguageSelected].contactSection.form.nameLabel;
  EmailLabel.innerHTML = lenguages[lenguageSelected].contactSection.form.emailLabel;
  MessageLabel.innerHTML = lenguages[lenguageSelected].contactSection.form.messageLabel;
  SendFormButton.innerHTML = lenguages[lenguageSelected].contactSection.form.sendFormButton;
}

//Lenguage checkbox
const LenguageCheckbox = document.querySelectorAll('.check');
LenguageCheckbox.forEach((check) =>{
  check.addEventListener('click', ()=>{
    if(check.checked){
      LenguageCheckbox.forEach(check=>{
        check.checked = true;
      })
      changeLenguage('spanish')
    }else{
      LenguageCheckbox.forEach(check=>{
        check.checked = false;
      })
      changeLenguage('english')
    }
  });
})

//Open & close menu mobile
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const Menu = document.querySelector(".menu");

openMenuBtn.addEventListener('click', ()=>{
  Menu.classList.add('menu-active')
});

closeMenuBtn.addEventListener('click', ()=>{
  Menu.classList.remove('menu-active')
});

//Night mode
const Body = document.querySelector('body');
const NightModeBtn = document.querySelectorAll('.night-mode-btn');

NightModeBtn.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    Body.classList.toggle('night-mode');
    if (Body.classList.contains('night-mode')) {
      Body.style.setProperty('--background', '#06042d');
      Body.style.setProperty('--svg-color', '#ebebeb');
      Body.style.setProperty('--highlighted-word', '#ebebeb');
      Body.style.setProperty('--highlighted-card-word', '#0473ff');
      Body.style.setProperty('--card-border', '1px solid #0473ff');
      Body.style.setProperty('--card-background', 'none');
      Body.style.setProperty('--frontend-title', '#b9b9ca');
      Body.style.setProperty('--font-color', '#1b1b1b');
      Body.style.setProperty('--font-color-dark', '#ebebeb');
      Body.style.setProperty('--border-card', '#0473ff');
      NightModeBtn.forEach(btn=>{
        btn.classList.toggle('d-none');
      })
    } else {
      Body.style.setProperty('--background', '#f5f6ff');
      Body.style.setProperty('--svg-color', '#1b1b1b');
      Body.style.setProperty('--highlighted-word', '#1b1b1b');
      Body.style.setProperty('--highlighted-card-word', '#1b1b1b');
      Body.style.setProperty('--card-border', '1px solid #1b1b1b');
      Body.style.setProperty('--card-background', '#ebebeb');
      Body.style.setProperty('--frontend-title', '#303041');
      Body.style.setProperty('--font-color', '#ebebeb');
      Body.style.setProperty('--font-color-dark', '#1b1b1b');
      Body.style.setProperty('--border-card', '#1b1b1b');
      NightModeBtn.forEach(btn=>{
        btn.classList.toggle('d-none');
      })
    }
  });
});
