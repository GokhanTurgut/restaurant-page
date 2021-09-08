const contactScreen = () => {
    const content = document.getElementById('content');

    const contactContainer = document.createElement('div');
    contactContainer.id = 'contactContainer';
    content.appendChild(contactContainer);

    const telephoneContainer = document.createElement('div');
    telephoneContainer.id = 'telephoneContainer';
    const telephoneIcon = document.createElement('span');
    telephoneIcon.classList.add('material-icons');
    telephoneIcon.innerText = 'phone';
    telephoneContainer.appendChild(telephoneIcon);
    const telephoneInfo = document.createElement('div');
    telephoneInfo.innerText = '+90-123-45-67'
    telephoneContainer.appendChild(telephoneInfo);
    contactContainer.appendChild(telephoneContainer);

    const locationContainer = document.createElement('div');
    locationContainer.id = 'locationContainer';
    const locationIcon = document.createElement('span');
    locationIcon.classList.add('material-icons');
    locationIcon.innerText = 'my_location';
    locationContainer.appendChild(locationIcon);
    const locationInfo = document.createElement('div');
    locationInfo.innerText = 'Marmara Sea, Turkey';
    locationContainer.appendChild(locationInfo);
    contactContainer.appendChild(locationContainer);

    const locationImage = document.createElement('img');
    locationImage.id = 'locationImage';
    locationImage.src = '../src/images/marmara-map.png';
    contactContainer.appendChild(locationImage);
}

export default contactScreen;