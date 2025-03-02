document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("soundButton");
    const audio = new Audio("sounds/бляяять.ogg");

    button.addEventListener("click", () => {
        audio.play();
    });
});
