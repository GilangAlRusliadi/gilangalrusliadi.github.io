// Deteksi apakah perangkat adalah mobile
const Mobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
let iconsData = [];

// Fungsi untuk fetch data JSON dan render elemen
async function fetchIconsData() {
  try {
    const response = await fetch('https://gilangalrusliadi.github.io/static/data.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    iconsData = await response.json();
    console.log("Data berhasil dimuat:", iconsData);

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

  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
}

fetchIconsData(); // Panggil fungsi untuk mulai fetch

// === Easter Egg ===
let clickCount = 0;
let resetTimeout;
let easterEggTriggered = false;

function triggerEasterEgg() {
  if (easterEggTriggered) return;
  easterEggTriggered = true;

  // const h3Elements = document.querySelectorAll("h3");
  // h3Elements.forEach(el => el.remove());

  const about = document.getElementById("about");
  if (about) {
    about.id = "easter-egg"; // ganti ID
    about.textContent = "You found it. I suppose that deserves a reward. It's… probably safe.";
  }

  const link = document.createElement("a");
  link.href = "https://huggingface.co/spaces/GilbertClaus/Test-HTML";
  link.target = "_self";

  const img = document.createElement("img");
  img.src = "picture/frieren_smug.png";
  img.alt = "Easter Egg";

  img.style.width = Mobile ? "200px" : "500px";
  img.style.display = "block";
  img.style.position = "fixed";
  img.style.bottom = "0px";
  img.style.left = "50%";
  img.style.transform = "translateX(-50%)";

  link.appendChild(img);

  const container = document.querySelector(".content");
  container.appendChild(link);

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

const eventType = Mobile ? "touchstart" : "click";
document.addEventListener(eventType, handleInput);
