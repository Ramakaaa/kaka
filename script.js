document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("soundButton");

    button.addEventListener("click", () => {
        let audio = new Audio("sounds/asd.mp3");
        audio.play().catch(error => console.log("Ошибка воспроизведения:", error));
    });
});
