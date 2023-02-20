const r_slider = document.getElementById("red");
const g_slider = document.getElementById("green");
const b_slider = document.getElementById("blue");
const a_slider = document.getElementById("alpha");
const colourBox = document.getElementById("colour");
const hexCode = document.getElementById("HexColour");

const sw = document.getElementById("switch");
let useAlpha = false;

function changeColour() {
    let red = r_slider.value;
    let green = g_slider.value;
    let blue = b_slider.value;

    if (useAlpha) {
        let alpha = a_slider.value / 100;

        let c = tinycolor(`rgba (${red}, ${green}, ${blue}, ${alpha})`);
            
        colourBox.style.backgroundColor =  `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        
        hexCode.value = "#" + c.toHex8();
    } else {
        let c = tinycolor(`rgb (${red}, ${green}, ${blue})`);
            
        colourBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        hexCode.value = "#" + c.toHex();
    }
}

function toggleAlpha() {
    if (useAlpha) {
        useAlpha = false;
        document.getElementById("alpha").disabled = true;
        changeColour();
    } else {
        useAlpha = true;
        document.getElementById("alpha").disabled = false;
        changeColour();
    }
}

function copyHex() {
    // Get the text field
    let copyText = document.getElementById("HexColour");

    // copy to clipboard
    navigator.clipboard.writeText(copyText.value).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}

function updateSliders() {
    let c = tinycolor(hexCode.value).toRgb();
    r_slider.value = c.r;
    g_slider.value = c.g;
    b_slider.value = c.b;
    colourBox.style.backgroundColor = `rgb(${c.r}, ${c.g}, ${c.b})`;
}

r_slider.addEventListener("input", changeColour);
g_slider.addEventListener("input", changeColour);
b_slider.addEventListener("input", changeColour);
a_slider.addEventListener("input", changeColour);

hexCode.addEventListener("input", updateSliders);
sw.addEventListener("input", toggleAlpha);
document.getElementById("alpha").disabled = true; // toggle starts out disabled

hexCode.value = "#000000";