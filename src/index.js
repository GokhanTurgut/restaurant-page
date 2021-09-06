import homeScreen from "./home";
import menuScreen from "./menu";
import contactScreen from "./contact";

const header = document.querySelector('header');

const content = document.getElementById('content');

const leftHeader = document.createElement('div');
leftHeader.classList.add('leftHeader');
header.appendChild(leftHeader);

const tridentLogo = document.createElement('img');
tridentLogo.src = '../src/images/trident.png';
leftHeader.appendChild(tridentLogo);

const nameTag = document.createElement('h1');
nameTag.innerText = 'Atlantis Kebab'
leftHeader.appendChild(nameTag);

const rightHeader = document.createElement('div');
rightHeader.classList.add('rightHeader');
header.appendChild(rightHeader);

const homeAnchor = document.createElement('a');
homeAnchor.innerText = 'Home';
rightHeader.appendChild(homeAnchor);

const menuAnchor = document.createElement('a');
menuAnchor.innerText = 'Menu';
rightHeader.appendChild(menuAnchor);

const contactAnchor = document.createElement('a');
contactAnchor.innerText = 'Contact';
rightHeader.appendChild(contactAnchor);

function clearContent() {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

homeScreen();