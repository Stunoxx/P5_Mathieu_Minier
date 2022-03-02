function getWidth() {
    width = window.screen.width;
    console.log(width);
getColor(width);
}

function getColor(width) {
    if (width > 1000) {
        color = 'green';
    } else if (width < 1000 && width > 700) {
        color = 'yellow';
    } else {
        color = 'red';
    }
    changeBackground(color);
}
function changeBackground(color){
    document.body.style.background= color;
}
-
-
-
-
-
-
getWidth();{
    setTimeout('getWidth,10000')
}

getWidth();