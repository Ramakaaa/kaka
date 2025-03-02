document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("soundButton");
    const audio = new Audio("sounds/бляяять.mp3");

    button.addEventListener("click", () => {
        audio.play();
    });
});
