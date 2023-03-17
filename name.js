let navbar=document.querySelector(".navbar");
let scrollUp=document.querySelector(".scroll-up-btn");
let menubtn=document.querySelector(".menu-btn");
let menubar=document.querySelector(".menu-btn i");
let html=document.querySelector("html");
let men=document.querySelector(".navbar .menu");
let morebtn=document.querySelector("#more");
let moretxt=document.querySelector(".more");

document.addEventListener("DOMContentLoaded",()=>{
    window.addEventListener("scroll",()=>{
        window.scrollY>20
        ?navbar.classList.add("sticky")
        :navbar.classList.remove("sticky");
        
        window.scrollY>500
        ?scrollUp.classList.add("show")
        :scrollUp.classList.remove("show");
    })
    
    morebtn.addEventListener('click',()=>{
        moretxt.style.display='block';
    })
    
    scrollUp.addEventListener("click",()=>{
        html.scrollTop=0;
    })

    menubtn.addEventListener("click",()=>{
        men.classList.toggle("active");
        menubar.classList.toggle("active");
    })




});