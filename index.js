function compute() {
    var protein = document.getElementById("protein").value;
    var fat = document.getElementById("fat").value;
    var mineral = document.getElementById("mineral").value;
    var fiber = document.getElementById("fiber").value;
    var water = document.getElementById("water").value;
    
    if (!water) {
        water = 10;
    }

    if (!fiber) {
        fiber = 3;
    }

    if (!mineral) {
        mineral = 8;
    }

    var glucide = 100 - protein - fat - mineral - fiber - water;
    document.getElementById("glucide").value = glucide;
}

document.getElementById("protein").onchange = compute;
document.getElementById("fat").onchange = compute;
document.getElementById("mineral").onchange = compute;
document.getElementById("fiber").onchange = compute;
document.getElementById("water").onchange = compute;

// 100 - protéines - matières grasses - cendres (matières minérales) - fibres (cellulose brute) - humidité = glucide

// humidité = 10%
// fibres= 3%
// cendres = 8%