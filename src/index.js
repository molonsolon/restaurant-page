import './styles/reset.scss';
import './styles/style.scss';
import initRender from './initRender';
import menuRender from './menuRender.js';
import homeRender from './homeRender.js'
import contactRender from './contactRender.js';

initRender();
homeRender();


const content = document.querySelector('#content')
const navMenu = document.querySelector('#nav-menu');
// const tabContent = document.querySelector('#tab-content');
const navHome = document.querySelector('#nav-home');
const navContact = document.querySelector('#nav-contact')
const tabContent = document.querySelector('#tab-content')
navMenu.addEventListener('click', () => {
    const oldTab = document.querySelector('#tab-content')

    content.removeChild(oldTab);
    menuRender();


});

navHome.addEventListener('click', () => {
    const oldTab = document.querySelector('#tab-content')
    content.removeChild(oldTab);
    homeRender();
})

navContact.addEventListener('click', () => {
    const oldTab = document.querySelector('#tab-content');
    content.removeChild(oldTab);
    contactRender();
})



console.log('hello joey!')