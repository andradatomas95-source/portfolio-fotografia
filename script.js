// =========================
// JS funcional
// =========================

// Selecciones
const images = document.querySelectorAll(".track img");
const carousel = document.querySelector(".carousel");
const hero = document.querySelector(".hero");
const cursor = document.querySelector(".cursor");

// ==== Overlay y zoom ====
images.forEach(img => {
  img.addEventListener("click", (e) => {
    img.classList.toggle("zoomed"); // toggle permite abrir/cerrar
    e.stopPropagation();
  });
});

document.addEventListener("click", () => {
  const zoomed = document.querySelector(".track img.zoomed");
  if (zoomed) zoomed.classList.remove("zoomed");
});

// ==== Scroll horizontal con rueda ====
carousel.addEventListener("wheel", (e) => {
  e.preventDefault();
  carousel.scrollLeft += e.deltaY;
});

// ==== Fade hero al hacer scroll ====
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const fadeStart = 0;
  const fadeEnd = 300; // px
  let opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
  if(opacity < 0) opacity = 0;
  if(opacity > 1) opacity = 1;
  hero.style.opacity = opacity;
});

// ==== Cursor personalizado ====
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
