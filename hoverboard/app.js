const SQUARES = 396; /*COMO USUARIO ELEGIR LA CANTIDAD DE CUADRADOS*/
const COLORS = ["#156064", "#c33c54", "#72a98f", "#d0cfec", "#5aa9e6"]; //COOLORS!!!
const $main = document.getElementById("container");
const $chkTheme = document.getElementById("theme");
$chkTheme.addEventListener("change", () => {
    document.body.classList.toggle("light");
})

function generateSquares(squares = 400){
    for(let i = 0; i < squares; i++){
        const $square = document.createElement("div");
        $square.classList.add("square");
        $square.addEventListener("mouseover", () => setColor($square));
        $square.addEventListener("mouseout", () => removeColor($square));
        $main.appendChild($square);
    }
}

function setColor(element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px var(${color}), 0 0 10px var(${color})`;
}

function removeColor(element){
    element.style.backgroundColor = "var(--secondary-color)";
    element.style.boxShadow = "0 0 2px var(--tertiary-color)";
}

function getRandomColor(){
    const random = Math.floor(Math.random() * COLORS.length);
    return COLORS[random];
}

generateSquares(SQUARES);