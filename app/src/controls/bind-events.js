window.addEventListener("load",init);

function init (){
    bindEvents();  
    // Set default settings
    document.getElementById("HexColour").value = "#000000";
}

let useAlpha = false;

function bindEvents() {
    document.getElementById("red").addEventListener("input", changeColour);
    document.getElementById("green").addEventListener("input", changeColour);
    document.getElementById("blue").addEventListener("input", changeColour);
    document.getElementById("alpha").addEventListener("input", changeColour);

    document.getElementById("HexColour").addEventListener("input", updateSlidersHex);
    document.getElementById("switch").addEventListener("input", toggleAlpha);
    document.getElementById("alpha").disabled = true; // toggle starts out disabled

    document.getElementById("r-t").addEventListener("input", updateSlidersRGBA);
    document.getElementById("g-t").addEventListener("input", updateSlidersRGBA);
    document.getElementById("b-t").addEventListener("input", updateSlidersRGBA);
    document.getElementById("a-t").addEventListener("input", updateSlidersRGBA);
    
}