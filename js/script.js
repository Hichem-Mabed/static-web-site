$(document).ready(function () {
    $(".owl-carousel").owlCarousel({ items: 4, nav: true });
});

const navbar={
    button:"",
    nav:document.querySelector(".main-nav"),
};
const schedule ={
    buttons:document.querySelectorAll(".schedule-nav a"),
    days:document.querySelectorAll(".schedule-day"),
};
function hideDays(){
    schedule.days.forEach((elm)=>{
        elm.classList.remove("active");
    });
}
function hideButtons(){
    schedule.buttons.forEach((elm)=>{
        elm.classList.remove("active");
    });
}
schedule.buttons.forEach(function(elm,i){
    elm.onclick = function(){
        hideDays();
        hideButtons();
        elm.classList.add("active");
        schedule.days[i].classList.add("active");
    };
});
function scrollHandler(){ 
    console.log(window.pageYOffset);
    if(window.pageYOffset>100){
        navbar.nav.classList.add("fixed");
    }
    else navbar.nav.classList.remove("fixed");
}
document.onscroll =  scrollHandler;
scrollHandler();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav-elements");
const hoverMenu = document.querySelector(".hover-menu");

hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
    hoverMenu.classList.toggle("active");
})

const button = document.querySelector(".button");
const REGISTRATIONS = document.querySelector(".REGISTRATIONS");
button.addEventListener("click",()=>{
    REGISTRATIONS.classList.toggle("active");
})