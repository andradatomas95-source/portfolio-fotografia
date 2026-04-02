// =========================
// 1. SELECTORES
// =========================
const images = document.querySelectorAll(".track img");
const heroImg = document.querySelector(".hero img");
const cursor = document.querySelector(".cursor");
const track = document.querySelector(".track");
const carousel = document.querySelector(".carousel");
const typingElement = document.getElementById("typing");

// =========================
// 2. TYPEWRITER
// =========================
const text = "TOMÁS ANDRADA - FOTOGRAFÍA DEPORTIVA";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
typeWriter();

// =========================
// 3. HERO FADE
// =========================
window.addEventListener("scroll", () => {
  let opacity = 1 - window.scrollY / 500;
  if (opacity < 0) opacity = 0;
  heroImg.style.opacity = opacity;
});

// =========================
// 4. CURSOR PERSONALIZADO
// =========================
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// cursor activo en hover
images.forEach(img => {
  img.addEventListener("mouseenter", () => cursor.classList.add("active"));
  img.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

// =========================
// 5. CONTROL DE INTERACCIÓN
// =========================
let isHovering = false;
let isDragging = false;

// hover del carrusel
carousel.addEventListener("mouseenter", () => isHovering = true);
carousel.addEventListener("mouseleave", () => isHovering = false);

// =========================
// 6. MOVIMIENTO CON CURSOR
// =========================
let mouseX = 0;
let currentX = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
});

function animate() {

  // 🔥 SOLO se mueve si NO estás interactuando
  if (!isHovering && !isDragging) {
    currentX += (mouseX * 80 - currentX) * 0.05;
    track.style.transform = `translateX(${currentX}px)`;
  }

  requestAnimationFrame(animate);
}
animate();

// =========================
// 7. CLICK → ZOOM
// =========================
images.forEach(img => {
  img.addEventListener("click", () => {
    const isActive = img.classList.contains("zoomed");

    images.forEach(i => i.classList.remove("zoomed"));

    if (!isActive) {
      img.classList.add("zoomed");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
});

// =========================
// 8. DRAG CAROUSEL (PRO)
// =========================
let startX;
let scrollStart;

carousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
  scrollStart = currentX;
  carousel.style.cursor = "grabbing";
});

carousel.addEventListener("mouseup", () => {
  isDragging = false;
  carousel.style.cursor = "grab";
});

carousel.addEventListener("mouseleave", () => {
  isDragging = false;
  carousel.style.cursor = "grab";
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  e.preventDefault();

  const walk = (e.pageX - startX) * 2; // sensibilidad
  currentX = scrollStart + walk;

  track.style.transform = `translateX(${currentX}px)`;
});
