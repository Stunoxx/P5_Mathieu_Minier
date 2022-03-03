function changeBackground(color){
    document.body.classList.add(color);
}
function setColor(width) {
    let color;
    if (width > 1000) {
        color = 'madivgreen';
    } else if (width < 1000 && width >= 700) {
        color = 'madivyellow';
    } else {
        color = 'madivred';
    }
    changeBackground(color);
}
function getWidth() {
    let width = window.innerWidth;
    console.log('widthtext',width);
    setColor(width);
}
getWidth();