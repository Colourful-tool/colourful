const r_slider = document.getElementById("red");
        const g_slider = document.getElementById("green");
        const b_slider = document.getElementById("blue");
        const a_slider = document.getElementById("alpha");
        const colour = document.getElementById("colour");

        function changeColour() {
            let red = r_slider.value;
            let green = g_slider.value;
            let blue = b_slider.value;
            let alpha = a_slider.value / 100;

            // Using: https://css-tricks.com/converting-color-spaces-in-javascript/
            let r = red.toString(16);
            let g = green.toString(16);
            let b = blue.toString(16);
            let a = Math.round(alpha * 255).toString(16);

            if (r.length == 1)
                r = "0" + r;
            if (g.length == 1)
                g = "0" + g;
            if (b.length == 1)
                b = "0" + b;
            if (a.length == 1)
                a = "0" + a;
                
            colour.style.backgroundColor = "rgba("+red +","+green+","+blue+","+alpha+")";
            document.getElementById("HexColour").innerHTML = "#" + r + g + b + a;
        }

        r_slider.addEventListener("input", changeColour);
        g_slider.addEventListener("input", changeColour);
        b_slider.addEventListener("input", changeColour);
        a_slider.addEventListener("input", changeColour);