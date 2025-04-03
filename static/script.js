const iconsData = [
    {
        href: "https://gilangalrusliadi.github.io/PVZ",
        imgSrc: "https://static.wikia.nocookie.net/pvz-fusion/images/b/b7/Snipea.png",
        text: "PVZ"
    },
    {
        href: "https://gilangalrusliadi.github.io/LN/",
        imgSrc: "https://gilangalrusliadi.github.io/LN/images/trapped-in-a-dating-sim-otome-games-are-tough-for-us-too-light-novel-vol-1.jpg",
        text: "Light Novel"
    },
    {
        href: "https://gilangalrusliadi.github.io/Sparkling-Cursor/",
        imgSrc: "https://cdn-icons-png.flaticon.com/256/1890/1890701.png",
        text: "Sparkling Mouse"
    },
    {
        href: "https://gilbertclaus.pythonanywhere.com",
        imgSrc: "https://static.wikia.nocookie.net/tmfanon/images/4/4c/FirstSeraphimCS.png",
        text: "Alter Ego"
    },
    {
        href: "https://gilbertclaus.pythonanywhere.com/templates/doujin.html",
        imgSrc: "https://static.wikia.nocookie.net/blue-archive/images/1/12/Schale_Icon_1.png",
        text: "Schale Network"
    },
    {
        href: "https://github.com/GilangAlRusliadi/Miyuki",
        imgSrc: "https://pbs.twimg.com/media/E4032VFXEAglwJ7.jpg",
        text: "Miyuki"
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
