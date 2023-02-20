const r_slider = document.getElementById("red");
const g_slider = document.getElementById("green");
const b_slider = document.getElementById("blue");
const a_slider = document.getElementById("alpha");
const colourBox = document.getElementById("colour");
const hexCode = document.getElementById("HexColour");

function changeColour() {
    let red = r_slider.value;
    let green = g_slider.value;
    let blue = b_slider.value;
    let alpha = a_slider.value / 100;

    let c = tinycolor(`rgba (${red}, ${green}, ${blue}, ${alpha})`);
        
    colourBox.style.backgroundColor = "rgba("+red +","+green+","+blue+","+alpha+")";
    
    hexCode.innerHTML = "#" + c.toHex8();
}

r_slider.addEventListener("input", changeColour);
g_slider.addEventListener("input", changeColour);
b_slider.addEventListener("input", changeColour);
a_slider.addEventListener("input", changeColour);

hexCode.innerHTML = "#000000";