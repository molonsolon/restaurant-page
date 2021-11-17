// import banner from './images/sicilian-coast.jpg';

export default function homeRender() {
    
    const tabContent = document.createElement('div');
    tabContent.classList.add('tab-content');
    tabContent.setAttribute('id', 'home-tab')
    const introCopy = document.createElement('p');
    // const bannerImg = new Image();
    // bannerImg.src = banner;
    introCopy.textContent = `
        Giuseppe's is committed to bringing you authentic
        Sicilian classics every day of the week. My passion 
        comes from place in a long line of Sicilians with 
        a tradition to feed anyone who steps through the front door.
        We're open 11 AM to 11PM 7 days a week, so come on in, grab
        yourself a seat, and make sure to clean your plate.
    `;
    // tabContent.appendChild(bannerImg);
    tabContent.appendChild(introCopy);
    content.appendChild(tabContent);
    return content;
}