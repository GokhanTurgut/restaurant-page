const menuScreen = () => {
    const content = document.getElementById('content');

    const menuContainer = document.createElement('div');
    menuContainer.id = 'menuContainer';
    content.appendChild(menuContainer);

    const item1 = document.createElement('div');
    const image1 = document.createElement('img');
    image1.src = 'images/kebab-mix.jpg';
    image1.classList.add('menuImage');
    item1.appendChild(image1);
    const description1 = document.createElement('div');
    description1.innerText = 'Mix of Different Kebabs';
    description1.classList.add('description');
    item1.appendChild(description1);
    menuContainer.appendChild(item1);

    const item2 = document.createElement('div');
    const image2 = document.createElement('img');
    image2.src = 'images/kebab-plate.jpg';
    image2.classList.add('menuImage');
    item2.appendChild(image2);
    const description2 = document.createElement('div');
    description2.innerText = 'Lamb Kebab Plate';
    description2.classList.add('description');
    item2.appendChild(description2);
    menuContainer.appendChild(item2);

    const item3 = document.createElement('div');
    const image3 = document.createElement('img');
    image3.src = 'images/kebab-sandwich.jpg';
    image3.classList.add('menuImage');
    item3.appendChild(image3);
    const description3 = document.createElement('div');
    description3.innerText = 'Beef or Chicken Kebab Sandwich';
    description3.classList.add('description');
    item3.appendChild(description3);
    menuContainer.appendChild(item3);

    const item4 = document.createElement('div');
    const image4 = document.createElement('img');
    image4.src = 'images/vegan-salad.jpg';
    image4.classList.add('menuImage');
    item4.appendChild(image4);
    const description4 = document.createElement('div');
    description4.innerText = 'Vegan Salad';
    description4.classList.add('description');
    item4.appendChild(description4);
    menuContainer.appendChild(item4);
}

export default menuScreen