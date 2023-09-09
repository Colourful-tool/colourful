// Change the alpha mode of the colour picker
function toggleAlpha() {
    useAlpha = !useAlpha;
    document.getElementById("alpha").disabled = !useAlpha;
    changeColour();
}

// Copy the hex code to the clipboard
function copyHex() {
    // Get the text field
    let copyText = document.getElementById("HexColour");

    // copy to clipboard
    navigator.clipboard.writeText(copyText.value).then(function() {
        console.log('Copying to clipboard was successful!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

// Update the sliders according to the hex code
function updateSlidersHex() {
    let c = tinycolor(document.getElementById("HexColour").value).toRgb();
    document.getElementById("red").value = c.r;
    document.getElementById("green").value = c.g;
    document.getElementById("blue").value = c.b;
    document.getElementById("colour").style.backgroundColor = `rgb(${c.r}, ${c.g}, ${c.b})`;
}

// Update the sliders according to the rgba input boxes
function updateSlidersRGBA() {
    let r = document.getElementById("r-t").value;
    let g = document.getElementById("g-t").value;
    let b = document.getElementById("b-t").value;
    let a = document.getElementById("a-t").value;

    document.getElementById("red").value = r;
    document.getElementById("green").value = g;
    document.getElementById("blue").value = b;

    if (useAlpha) {
        document.getElementById("alpha").value = a;
        document.getElementById("colour").style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${a})`;
    } else {
        document.getElementById("a-t").value = document.getElementById("alpha").value;
        document.getElementById("colour").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}
