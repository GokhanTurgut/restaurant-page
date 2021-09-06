const homeScreen = () => {
    const content = document.getElementById('content');
    
    content.classList.toggle('image');

    const paragraph = document.createElement('p');
    paragraph.innerText = `Dive in Marmara Sea to find Atlantis Kebab to try our delicious foods!`;
    content.appendChild(paragraph);
}

export default homeScreen