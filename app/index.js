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
let lenguages;
fetch('../textos.json')
  .then(response => response.json())
  .then(data => {
    lenguages = data[0];
    
  })
  .catch(error => {
    console.error('Error:', error);
  });
function changeLenguage(lenguageSelected){
  ReactProjectText.innerHTML = lenguages[lenguageSelected].projects.RJS;
  DwProjectText.innerHTML = lenguages[lenguageSelected].projects.DW;
  PhpProjectText.innerHTML = lenguages[lenguageSelected].projects.PHP;
  JsProjectText.innerHTML = lenguages[lenguageSelected].projects.JS;


  AboutTitle.innerHTML = lenguages[lenguageSelected].about;
  // JsProjectText.innerHTML = lenguages[lenguageSelected].projects.JS;

  // AboutTitle
}

const Check = document.querySelector('.check');

const AboutTitle = document.querySelector(".about-text");

const ProjectsTitle = document.querySelector(".projects-title");
const ReactProjectText = document.querySelector(".reactjs-text");
const DwProjectText = document.querySelector(".dw-text");
const PhpProjectText = document.querySelector(".php-text");
const JsProjectText = document.querySelector(".js-text");

const SkillsTitle = document.querySelector(".skills-title");

const ContactTitle = document.querySelector(".contact-title");

Check.addEventListener('click', ()=>{
  if(Check.checked){
    changeLenguage('spanish')
  }else{
    changeLenguage('english')
  }
});

