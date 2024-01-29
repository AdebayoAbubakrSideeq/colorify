function paint(color){
    const circle = document.getElementById('circleID');
    circle.style = `background-color:${color}`;
}

function random(color) {
    function c(){
        var hex = Math.floor(Math.random()*256).toString(16);
        return ("0"+String(hex)).substr(-2);
    }
    return "#"+c()+c()+c();
}