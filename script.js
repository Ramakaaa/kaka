document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("soundButton");
    const audio = new Audio("sounds/click.mp3");

    button.addEventListener("click", () => {
        audio.currentTime = 0; // Сбрасываем время для быстрого повторного воспроизведения
        audio.play().catch(error => console.error("Ошибка воспроизведения:", error));
    });
});
