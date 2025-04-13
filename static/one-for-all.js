document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".profile");
  
    profiles.forEach(profile => {
      // Menemukan semua elemen <a> di dalam elemen profile
      const links = profile.querySelectorAll("a");
  
      // Menambahkan atribut dan gaya pada setiap elemen <a>
      links.forEach(link => {
        link.target = "_self";
        link.rel = "noopener noreferrer";
        link.style.textDecoration = "none";
        link.style.color = "white";
      });
    });
});