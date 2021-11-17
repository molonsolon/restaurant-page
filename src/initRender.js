
export default function initRender() {
    const content = document.querySelector('#content');
    const navbar = document.createElement('nav');
    const titleContainer = document.createElement('header');
    titleContainer.setAttribute('id', 'title-container')
    const title = document.createElement('h1');

    const navContent = document.createElement('ul');
    
    const navHome = document.createElement('li');
    navHome.setAttribute('id', 'nav-home');
    navHome.classList.add('nav-item');
    
    const navMenu = document.createElement('li');
    navMenu.setAttribute('id', 'nav-menu');
    navMenu.classList.add('nav-item');

    const navContact = document.createElement('li');
    navContact.setAttribute('id', 'nav-contact');
    navContact.classList.add('nav-item');

    
    
    console.log('hello')
    navMenu.textContent = 'Menu';
    navHome.textContent = 'Home';
    navContact.textContent = 'Contact';

    title.textContent = `Giuseppe's`;
    
    

    
    titleContainer.appendChild(title);
    content.appendChild(titleContainer)
    content.appendChild(navbar);
    navbar.appendChild(navContent);
    navContent.appendChild(navHome);
    navContent.appendChild(navMenu);
    navContent.appendChild(navContact);
    

    return content
    
};