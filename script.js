// =========================
// JS funcional
// =========================

const images = document.querySelectorAll(".track img");
const carousel = document.querySelector(".carousel");
const hero = document.querySelector(".hero");
const cursor = document.querySelector(".cursor");

const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");

// ==== Overlay tipo Lightbox (solo 1 foto a la vez) ====
images.forEach(img => {
  img.addEventListener("click", (e) => {
    // Si ya hay overlay abierto, cerrarlo primero
    if (overlay.classList.contains("show")) {
      overlay.classList.remove("show");
      setTimeout(() => {
        overlayImg.src = img.src;
        overlay.classList.add("show");
      }, 200); // esperar a que se cierre la transición
    } else {
      overlayImg.src = img.src;
      overlay.classList.add("show");
    }
    e.stopPropagation();
  });
});

// Cerrar overlay al click
overlay.addEventListener("click", () => {
  overlay.classList.remove("show");
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
  const fadeEnd = 300;
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
