// Select the body element
const bodyEl = document.querySelector("body");

// Listen for mouse movement on the page
bodyEl.addEventListener("mousemove", (event) => {
    //current mouse position
    const xPos = event.pageX;
    const yPos = event.pageY;

    const spanEl = document.createElement("span");

    // Position the span at the mouse coordinates
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    // Random size between 10px to 100px
    const size = Math.random() * 50 + 10;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    // Add the heart to the page
    bodyEl.appendChild(spanEl);

    // Remove the heart after 3 seconds
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});
