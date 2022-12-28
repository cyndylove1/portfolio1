


window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
    });


var pagebody=document.querySelector(".page")
var menu=document.querySelector(".menu-container") 
var mobilelinks=document.querySelector(".mobilelinks-container")

function add(){
    menu.classList.toggle('showbutton')
    mobilelinks.classList.toggle('showmobilelink')
}


 const sr = ScrollReveal ({
    distance: '60px',
    duration: 2000,
    reset: true

 })
 sr.reveal('content.',{delay:350, origin:'left'})
 sr.reveal('.content-img,.content-service,.skill-main,.portfolio-item,.container-3', {delay:350, origin:'bottom'})

       