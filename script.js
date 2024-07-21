let angle = 0;

function rotatePrism() {
    angle += 60;
    document.querySelector('.prism').style.transform = `rotateY(${angle}deg)`;
}
