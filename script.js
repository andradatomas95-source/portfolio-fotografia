const images = document.querySelectorAll(".grid img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlayImg.src = img.src;
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero img");
  let scroll = window.scrollY;

  let opacity = 1 - scroll / 500;

  if (opacity < 0) opacity = 0;

  hero.style.opacity = opacity;
});

// cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// zoom cursor en hover
document.querySelectorAll(".track img").forEach(img => {
  img.addEventListener("mouseenter", () => cursor.classList.add("active"));
  img.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

// velocidad dinámica
const track = document.querySelector(".track");

window.addEventListener("scroll", () => {
  let speed = 60 - window.scrollY / 20;

  if (speed < 15) speed = 15;

  track.style.animationDuration = speed + "s";
});
// animación proyectos
const projects = document.querySelectorAll(".project");

window.addEventListener("scroll", () => {
  projects.forEach(p => {
    let rect = p.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      p.style.opacity = 1;
      p.style.transform = "translateY(0)";
    }
  });
});
