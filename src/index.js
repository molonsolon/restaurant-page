import './styles/reset.scss';
import './styles/style.scss';
import {gsap} from "gsap";
import initRender from './initRender';
import menuRender from './menuRender.js';
import homeRender from './homeRender.js'
import contactRender from './contactRender.js';
import {animationHandler} from './animations.js';

initRender();
homeRender();
animationHandler.titleHover();

const content = document.querySelector('#content')
const navMenu = document.querySelector('#nav-menu');
// const tabContent = document.querySelector('#tab-content');
const navHome = document.querySelector('#nav-home');
const navContact = document.querySelector('#nav-contact')
const tabContent = document.querySelector('#tab-content')
const navItems = document.querySelector('.nav-item');


// navItems.addEventListener('mouseover', () => {

        
//         const navAnimation = gsap.timeline();
//         navAnimation
//         .to(".nav-item", {duration: 2, rotation: 90})
//         .to(".nav-item", {duration: 2, rotation: 0});
        

// })

navMenu.addEventListener('click', () => {
    const oldTab = document.querySelector('.tab-content')

    content.removeChild(oldTab);
    menuRender();


});

navHome.addEventListener('click', () => {
    const oldTab = document.querySelector('.tab-content')
    content.removeChild(oldTab);
    homeRender();
})

navContact.addEventListener('click', () => {
    const oldTab = document.querySelector('.tab-content');
    content.removeChild(oldTab);
    contactRender();
})



console.log('hello joey!')