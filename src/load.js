import banner from './images/sicilian-coast.jpg';

export default function initRender() {
    const navbar = document.createElement('nav');
    const title = document.createElement('h1');
    const introCopy = document.createElement('p');
    const content = document.querySelector('#content');
    const navContent = document.createElement('ul');
    const navHome = document.createElement('li');
    const navMenu = document.createElement('li');
    const navContact = document.createElement('li');

    navMenu.textContent = 'Menu';
    navHome.textContent = 'Home';
    navContact.textContent = 'Contact';

    title.textContent = `Giuseppe's`;
    
    introCopy.textContent = `
        Giuseppe's is committed to bringing you authentic
        Italian classics every day of the week. My passion 
        comes from place in a long line of Sicilians with 
        a tradition to feed anyone who steps through the front door.
        We're open 11 AM to 12PM 7 days a week, so come on in, grab
        yourself a seat, and make sure to clean your plate.
    `;

    const bannerImg = new Image();
    bannerImg.src = banner;

    content.appendChild(title);
    content.appendChild(navbar);
    navbar.appendChild(navContent);
    navContent.appendChild(navHome);
    navContent.appendChild(navMenu);
    navContent.appendChild(navContact);
    content.appendChild(bannerImg);
    content.appendChild(introCopy);

    return content
    
};