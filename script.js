const sketchContainer = document.querySelector("div");

for (let i=0; i < 15; i++) {
    for (let x=0; x<5; x++) {
        let tempDiv = document.createElement("div");
        tempDiv.textContent = "..b."
        tempDiv.classList.add("unhovered")
        tempDiv.style.display = "flex";
        tempDiv.style.minWidth = "10px";
        tempDiv.style.minHeight = "10px";
        tempDiv.style.flexGrow = true;
        tempDiv.addEventListener("mouseenter", () => {
            tempDiv.classList.remove("unhovered");
            tempDiv.classList.add("hovered");
        })
        sketchContainer.appendChild(tempDiv);
    }
}