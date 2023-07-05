const header = document.querySelector('header')

window.addEventListener("scroll",()=>{
    header.classList.toggle("showHeader", window.scrollY>0);
})
console.log(window.scrollY);

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open')
}
