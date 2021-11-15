import data from './data.json';

const menuData = data.menuData;
const content = document.querySelector('#content')

export default function menuRender() {
    const tabContent = document.createElement('div');
    tabContent.setAttribute('id', 'tab-content');
    console.log(tabContent)
    
    const menuHeader = document.createElement('h2');
    const menuAppetizersHeader = document.createElement('h3');
    menuAppetizersHeader.textContent = 'Appetizers'
    const menuEntreesHeader = document.createElement('h3');
    menuEntreesHeader.textContent = 'Entrees'
    const menuBeveragesHeader = document.createElement('h3');
    menuBeveragesHeader.textContent = 'Beverages'
    const menuAppetizer = document.createElement('section');
    menuAppetizer.classList.add('menu-lists');
    const menuEntree = document.createElement('section');
    menuEntree.classList.add('menu-lists');
    const menuBeverage = document.createElement('section');
    menuBeverage.classList.add('menu-lists');


    // need to write a loop that reads all objects within menuData
    // it will first check the value of the category in an if .. else
    // in order to append the right items in the right places
    // then it will create <h4> and <p> elements that will correspond
    // to each point of data in the objects
    // apply styling, attributes, then append. 

    menuData.forEach((i) => {
        const menuItem = document.createElement('dl')
        menuItem.classList.add('menu-item-card')
        if (i.category === 'appetizer') {
            for (const value in i) {
                if (value === 'name') {
                    const dt = document.createElement('dt');
                    dt.textContent = i[value];
                    menuItem.appendChild(dt);
                    menuAppetizer.appendChild(menuItem);
                } else if (value !== 'category') {
                    const dd = document.createElement('dd');
                    dd.textContent = i[value];

                    menuItem.appendChild(dd);
                    menuAppetizer.appendChild(menuItem);
                }
            }
        } else if (i.category === 'entree') {
            for (const value in i) {
                console.log(value)
                if (value === 'name') {
                    const dt = document.createElement('dt');
                    dt.textContent = i[value];
                    menuItem.appendChild(dt);
                    menuEntree.appendChild(menuItem);
                } else if (value !== 'category') {
                    const dd = document.createElement('dd');
                    dd.textContent = i[value];
                    menuItem.appendChild(dd);
                    menuEntree.appendChild(menuItem);
                }
            
            }
        } else  {
            for (const value in i) {
                if (value === 'name') {
                    const dt = document.createElement('dt');
                    dt.textContent = i[value];
                    menuItem.appendChild(dt);
                    menuBeverage.appendChild(menuItem);
                } else if (value !== 'category') {
                    const dd = document.createElement('dd');
                    dd.textContent = i[value];
                    menuItem.appendChild(dd);
                    menuBeverage.appendChild(menuItem);
                }
            }
        }
    });
    
    tabContent.appendChild(menuHeader);
    tabContent.appendChild(menuAppetizersHeader);
    tabContent.appendChild(menuAppetizersHeader);
    tabContent.appendChild(menuAppetizer)
    tabContent.appendChild(menuEntreesHeader);
    tabContent.appendChild(menuEntree);
    tabContent.appendChild(menuBeveragesHeader);
    tabContent.appendChild(menuBeverage);
    content.appendChild(tabContent);
    

}