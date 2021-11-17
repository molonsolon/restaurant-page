import data from './data.json';

const contactData = data.contactData;

export default function contactRender() {
    const content = document.querySelector('#content')
    const tabContent = document.createElement('div');
    tabContent.setAttribute('id', 'contact-tab');
    tabContent.classList.add('tab-content')
    const header = document.createElement('h2');
    header.textContent = 'Contact Us!'
    const infoList = document.createElement('ul');
    infoList.setAttribute('id', 'contact-list')
    const email = document.createElement('li');
    const phone = document.createElement('li');
    const address = document.createElement('li');
    const social = document.createElement('li');
    const socialIcons = document.createElement('div');

    
    for (let value of Object.keys(contactData)) {
            
            switch (value) {
                case 'email':
                    email.textContent = contactData.email;
                    break;
                case 'phone':
                    phone.textContent = contactData.phone;
                    break;
                case 'address':
                    address.textContent = contactData.address;
                    break;
                case 'social':
                    social.textContent = contactData.social;
                    break;
                default:
                    console.log('data read error');
            }
            
        
    }

    tabContent.appendChild(header);
    tabContent.appendChild(infoList);
    infoList.appendChild(email);
    infoList.appendChild(phone);
    infoList.appendChild(address);
    infoList.appendChild(social);
    tabContent.appendChild(socialIcons)
    content.appendChild(tabContent);


    
}