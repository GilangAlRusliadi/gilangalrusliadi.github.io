// Deteksi apakah perangkat adalah mobile
const Mobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const iconsData = [
    {
        text: "PVZ",
        href: "https://gilangalrusliadi.github.io/PVZ",
        imgSrc: "https://static.wikia.nocookie.net/pvz-fusion/images/b/b7/Snipea.png"
    },
    {
        text: "Light Novel",
        href: "https://gilangalrusliadi.github.io/LN/",
        imgSrc: "https://gilangalrusliadi.github.io/LN/images/trapped-in-a-dating-sim-otome-games-are-tough-for-us-too-light-novel-vol-1.jpg"
    },
    {
        text: "Sparkling Mouse",
        href: "https://gilangalrusliadi.github.io/Sparkling-Cursor/",
        imgSrc: "https://cdn-icons-png.flaticon.com/256/1890/1890701.png"
    },
    {
        text: "Alter Ego",
        href: "https://gilbertclaus.pythonanywhere.com",
        imgSrc: "https://static.wikia.nocookie.net/tmfanon/images/4/4c/FirstSeraphimCS.png"
    },
    {
        text: "Schale Network",
        href: "https://gilbertclaus.pythonanywhere.com/templates/doujin.html",
        imgSrc: "https://static.wikia.nocookie.net/blue-archive/images/1/12/Schale_Icon_1.png"
    },
    {
        text: "Miyuki",
        href: "https://github.com/GilangAlRusliadi/Miyuki",
        imgSrc: "https://pbs.twimg.com/media/E4032VFXEAglwJ7.jpg"
    }
];

const iconsContainer = document.querySelector(".icons");

iconsData.forEach(icon => {
    const anchor = document.createElement("a");
    anchor.href = icon.href;
    anchor.target = "_self";
    anchor.classList.add("icon");

    const img = document.createElement("img");
    img.src = icon.imgSrc;
    img.alt = icon.text;

    const span = document.createElement("span");
    span.textContent = icon.text;

    anchor.appendChild(img);
    anchor.appendChild(span);
    iconsContainer.appendChild(anchor);
});

let clickCount = 0;
let resetTimeout;
let easterEggTriggered = false; // Untuk mencegah eksekusi ulang

function triggerEasterEgg() {
    if (easterEggTriggered) return; // Jangan lanjut kalau sudah pernah dipicu
    easterEggTriggered = true;

    // Hapus semua elemen <h3>
    const h3Elements = document.querySelectorAll("h3");
    h3Elements.forEach(el => el.remove());

    // Buat elemen <a> dan <img>
    const link = document.createElement("a");
    link.href = "https://huggingface.co/spaces/GilbertClaus/Test-HTML";
    link.target = "_self";

    const img = document.createElement("img"); 
    // img.src = "https://media.tenor.com/mI3JkM_fvmEAAAAj/easter-easter-eggs.gif";
    img.src = "picture/frieren_smug.png";
    img.alt = "Easter Egg";

    // Deteksi perangkat
    img.style.width = Mobile
        ? "200px"
        : "500px";
        
    img.style.display = "block";
    img.style.position = "fixed";
    img.style.bottom = "0px";
    img.style.left = "50%";
    img.style.transform = "translateX(-50%)";

    link.appendChild(img);

    // Tambahkan ke dalam kontainer
    const container = document.querySelector(".content");
    container.appendChild(link);

    // Matikan listener
    document.removeEventListener("click", handleInput);
    document.removeEventListener("touchstart", handleInput);
}

function handleInput() {
    if (easterEggTriggered) return;

    clickCount++;
    if (clickCount >= 5) {
        triggerEasterEgg();
    }

    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(() => {
        clickCount = 0;
    }, 3000);
}

// Tambahkan listener
const eventType = Mobile ? "touchstart" : "click";
document.addEventListener(eventType, handleInput);
