const sketchContainer = document.querySelector("div");

const buttonSetter = document.querySelector("button");

function resetCanvas(boxCount=10) {
    if (boxCount > 100) { boxCount = 100};
    const removeHovered = document.querySelectorAll("div.hovered");
    const removeUnhovered = document.querySelectorAll("div.unhovered");
    for (let i = 0; i< removeHovered.length;i++) {
        sketchContainer.removeChild(removeHovered[i]);
    }
    for (let i = 0; i< removeUnhovered.length;i++) {
        sketchContainer.removeChild(removeUnhovered[i]);
    }
    for (let i=0; i < boxCount; i++) {
        for (let x=0; x<boxCount; x++) {
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
            })
            sketchContainer.appendChild(tempDiv);
        }
    }
}
resetCanvas();

buttonSetter.addEventListener("click", () => {
    const userInput = prompt("Enter canvas size. (Max: 100)");
    resetCanvas(userInput);
});
