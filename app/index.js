const sections = document.querySelectorAll('.ObserverSection');
const navList = document.querySelectorAll('nav li');

let observer = new IntersectionObserver((entries)=>{
    entries.forEach((e)=>{

        navList.forEach((link)=>{
            if(e.target.id === link.dataset.nav){
                link.classList.add('active')
            }else{
                link.classList.remove('active')
            }
        })
    });
}, {
    threshold: 0.6
});

sections.forEach((section)=>{
    observer.observe(section);
})