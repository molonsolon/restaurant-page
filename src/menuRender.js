import { menuData } from './data.js';

export default function menuRender() {
    const content = document.querySelector('#content');
    const menuHeader = document.createElement('h2');
    const menuAppetizersHeader = document.createElement('h3');
    const menuEntreesHeader = document.createElement('h3');
    const menuBeveragesHeader = document.createElement('h3');
    const menuAppetizerList = document.createElement('ul');
    const menuEntreesList = document.createElement('ul');
    const menuBeveragesList = document.createElement('ul');

    // need to write a loop that reads all objects within menuData
    // it will first check the value of the category in an if .. else
    // in order to append the right items in the right places
    // then it will create <h4> and <p> elements that will correspond
    // to each point of data in the objects
    // apply styling, attributes, then append. 
}