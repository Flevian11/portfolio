let navbar=document.querySelector(".navbar");
let scrollUp=document.querySelector(".scroll-up-btn");
let menubtn=document.querySelector(".menu-btn");
let menubar=document.querySelector(".menu-btn i");
let html=document.querySelector("html");
let carouse=document.querySelector(".carousel");
let men=document.querySelector(".navbar .menu");

document.addEventListener("DOMContentLoaded",()=>{
    window.addEventListener("scroll",()=>{
        window.scrollY>20
        ?navbar.classList.add("sticky")
        :navbar.classList.remove("sticky");

        window.scrollY>500
        ?scrollUp.classList.add("show")
        :scrollUp.classList.remove("show");
    })

    scrollUp.addEventListener("click",()=>{
        html.scrollTop=0;
    })

    menubtn.addEventListener("click",()=>{
        men.classList.toggle("active");
        menubar.classList.toggle("active");
    })

    var typed=new Typed(".typing", {
        strings: ["Developer", "Hacker", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed=new Typed(".typing-2", {
        strings: ["Developer", "Hacker", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })


});
