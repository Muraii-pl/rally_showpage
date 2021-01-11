const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector('nav')
const handleClick = () =>{
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('nav--active')
};
hamburger.addEventListener('click',handleClick);


const img = document.querySelectorAll(".gallery__img");
const modalView = () =>{
    
};

img.forEach((ele) => {
    ele.addEventListener('click',() => {
        console.log(ele)
        ele.classList.toggle('image__click')
    })
});