var pic = document.getElementById("vimage");
var clearB = document.getElementById("clear");

var h = pic.getAttribute("height");
var w = pic.getAttribute("width");
var r = h / 25;

var drawCircle = function(x, y) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", h / 25);
    circle.setAttribute("fill", "red");
    circle.setAttribute("stroke", "black");

    pic.appendChild(circle);
}

var change = function(e) {
    e.preventDefault();
    console.log("change" + this);
    this.setAttribute("fill", "green");
}

var clear = function() {
    pic.innerHTML = '';
}

var draw = function(e) {
    console.log("draw" + this);
    e.preventDefault();
    if (e.toElement == this) {
        var x = e.offsetX;
        var y = e.offsetY;
        drawCircle(x, y);
    }
    circleChangeListeners();
}

var circleChangeListeners = function() {
    cs = document.getElementsByTagName("circle");
    for (i = 0; i < cs.length; i++) {
        cs[i].addEventListener("click", change)
    }
}

pic.addEventListener("click", draw)
clearB.addEventListener("click", clear)
