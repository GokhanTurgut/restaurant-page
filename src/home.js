const homeScreen = () => {
    const content = document.getElementById('content');
    
    const paragraph = document.createElement('p');
    paragraph.innerText = `Come find us in Marmara Sea to try our delicious foods!`;
    content.appendChild(paragraph);
}

export default homeScreen