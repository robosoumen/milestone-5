const mainContainer = document.getElementById('main-container');

const placesSection = document.createElement('section');

//create h1
const h1 = document.createElement('h1')
h1.innerText = 'places i want to see';
placesSection.appendChild(h1)

//create ul
const ul = document.createElement('ol');

//create li
const li1 = document.createElement('li');
li1.innerText = 'andarbon-bandar';

//jora deya
ul.appendChild(li1)

placesSection.appendChild(ul)


mainContainer.appendChild(placesSection)

