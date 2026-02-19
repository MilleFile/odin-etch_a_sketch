const sketchContainer = document.querySelector("div");

const buttonSetter = document.querySelector("button");

function randColor () {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${blue}, ${green})`;
}

function resetCanvas(boxCount=10) {
    if (boxCount > 100) {boxCount = 100};
    const removeRow = document.querySelectorAll("div.rowManager");
    for (let i = 0; i< removeRow.length;i++) {
        sketchContainer.removeChild(removeRow[i]);
    }


    for (let i=0; i < boxCount; i++) {
        let currentRow = document.createElement("div");
        currentRow.classList.add("rowManager");
        currentRow.style.display = "flex";
        currentRow.style.flex = 1;
        currentRow.style.flexGrow = 1;
        currentRow.style.flexDirection = "row";
        for (let x=0; x < boxCount; x++) {
            let tempDiv = document.createElement("div");
            tempDiv.textContent = ""
            tempDiv.classList.add("unhovered")
            tempDiv.style.display = "flex";
            tempDiv.style.minWidth = "10px";
            tempDiv.style.minHeight = "10px";
            tempDiv.style.flex = 1;
            tempDiv.style.flexGrow = true;
            tempDiv.addEventListener("mouseenter", () => {
                tempDiv.classList.remove("unhovered");
                tempDiv.classList.add("hovered");
                tempDiv.style.opacity = Number(tempDiv.style.opacity) + 0.1;
                tempDiv.style.backgroundColor = randColor();
            })
            currentRow.appendChild(tempDiv);
        }
        sketchContainer.appendChild(currentRow);
    }
}
resetCanvas();

buttonSetter.addEventListener("click", () => {
    const userInput = prompt("Enter canvas size. (Max: 100)");
    resetCanvas(userInput);
});
