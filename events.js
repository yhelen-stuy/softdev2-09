// Team SMH
// Helen Ye & Samantha Ngo
// Softdev - pd7
// K#09
// 2018-03-07

var pic = document.getElementById("vimage");
var clearB = document.getElementById("clear");

var h = pic.getAttribute("height");
var w = pic.getAttribute("width");
var r = h / 25;

// General Starting Functions ------------------------------------------------
// Clears the board
var clear = function() {
    pic.innerHTML = '';
    console.log("Board cleared; all items removed.");
}

// Passes mouse coordinates to drawCircle
var draw = function(e) {
    console.log("Drawing THIS circle: " + this);
    e.preventDefault();
    if (e.toElement == this) {
        var x = e.offsetX;
        var y = e.offsetY;
        drawCircle(x, y);
    }
    // circleChangeListeners();
}

/*
// Add event listeners to all circles -- unnecessary? because you already add a 
// listener every time you create a new circle, so they should all have one
var circleChangeListeners = function() {
    cs = document.getElementsByTagName("circle");
    for (i = 0; i < cs.length; i++) {
    }
}
*/

// Add event listeners for board and for the clear button
pic.addEventListener("click", draw);
clearB.addEventListener("click", clear);

// Draws a circle at given coordinates
var drawCircle = function(x, y) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", h / 25);
    circle.setAttribute("fill", "lightgreen");

    // Added event listener
    pic.appendChild(circle);
    circle.addEventListener("click", change)
}

// Resulting Functions ------------------------------------------------------
// Changes the color of a circle from light green to dark green
var change = function(e) {
    e.preventDefault();
    console.log("Changed: " + this + " to COLOR DARK GREEN");
    this.setAttribute("fill", "green");

    // Added event listener
    this.addEventListener("click", randomNew);
}

// Creates a random new circle
var randomNew = function(e){
    this.remove();
    console.log("Circle removed.");
    var ranX = Math.round(Math.random() * 501);
    var ranY = Math.round(Math.random() * 501);
    console.log("New Circle at: ", ranX, ranY);
    drawCircle(ranX, ranY);
    return true;
}


