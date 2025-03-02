document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("soundButton");

    button.addEventListener("click", () => {
        let audio = new Audio("sounds/qwe.mp3").play();
        audio.play().catch(error => console.log("Ошибка воспроизведения:", error));
    });
});
