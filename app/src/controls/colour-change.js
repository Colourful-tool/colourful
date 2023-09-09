// Change the colour of the box according to the RGB values on the sliders
function changeColour() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    writeColour();

    if (useAlpha) {
        let alpha = document.getElementById("alpha").value / 100;

        let c = tinycolor(`rgba (${red}, ${green}, ${blue}, ${alpha})`);
            
        document.getElementById("colour").style.backgroundColor =  `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        
        document.getElementById("HexColour").value = "#" + c.toHex8();
    } else {
        let c = tinycolor(`rgb (${red}, ${green}, ${blue})`);
        
        document.getElementById("colour").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        document.getElementById("HexColour").value = "#" + c.toHex();
    }
}
