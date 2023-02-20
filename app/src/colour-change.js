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
        
        hexCode.innerHTML = "#" + c.toHex8();
    } else {
        let c = tinycolor(`rgb (${red}, ${green}, ${blue})`);
            
        colourBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        hexCode.innerHTML = "#" + c.toHex();
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
    }
    console.log(sw.value);
}

r_slider.addEventListener("input", changeColour);
g_slider.addEventListener("input", changeColour);
b_slider.addEventListener("input", changeColour);
a_slider.addEventListener("input", changeColour);

sw.addEventListener("input", toggleAlpha);
document.getElementById("alpha").disabled = true; // toggle starts out disabled

hexCode.innerHTML = "#000000";