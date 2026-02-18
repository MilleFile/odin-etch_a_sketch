const sketchContainer = document.querySelector("div");

for (let i=0; i < 16; i++) {
    for (let x=0; x<16; x++) {
        let tempDiv = document.createElement("div");
        tempDiv.textContent = "..b."
        tempDiv.classList.add("unhovered")
        tempDiv.style.display = "flex";
        tempDiv.style.minWidth = "50px";
        tempDiv.style.minHeight = "50px";
        sketchContainer.appendChild(tempDiv);
    }
}