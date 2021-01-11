const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector('.nav')
const handleClick = () =>{
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('nav--active')
    nav.style.position = "fixed";
};
hamburger.addEventListener('click',handleClick);

const navLinks = document.querySelectorAll('.nav__links');
navLinks.forEach((element)=>{
    element.addEventListener('click',()=>{
        console.log(element)
    nav.classList.remove('nav--active');
    hamburger.classList.remove('hamburger--active')
});
});

