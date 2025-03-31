document.addEventListener("DOMContentLoaded", function () {
    let frame = document.getElementById("dynamicFrame");
    let overlay = document.querySelector(".overlay");
    let urls = [
        "https://gilbertclaus.pythonanywhere.com/animated/star",
        "https://gilbertclaus.pythonanywhere.com/animated/orbit",
        "https://gilbertclaus.pythonanywhere.com/animated/star2"
        // "https://gilangalrusliadi.github.io/Login/",
    ];
    let index = 0;

    setInterval(() => {
        // Mulai fade-in overlay hitam
        overlay.style.opacity = "1";

        setTimeout(() => {
            // Ganti URL setelah fade-out selesai
            index = (index + 1) % urls.length;
            frame.src = urls[index];

            // Setelah sedikit delay, fade-out overlay hitam
            setTimeout(() => {
                overlay.style.opacity = "0";
            }, 500);
        }, 500); // Waktu overlay hitam sebelum mengganti src
    }, 10000);
});
